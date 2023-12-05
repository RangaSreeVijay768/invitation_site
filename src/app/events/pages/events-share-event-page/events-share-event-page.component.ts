import {Component, Injector, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import {Location} from '@angular/common';
import {
    EventsUploadUserContactsFromCsvSwiperModalNoTemplateComponent
} from "@events/components/events-upload-user-contacts-from-csv-swiper-modal/events-upload-user-contacts-from-csv-swiper-modal.component";
import {
    EventsInviteToEventInShareEventModalComponent
} from "@events/components/events-invite-to-event-in-share-event-modal/events-invite-to-event-in-share-event-modal.component";
import EventInfo = Events.EventInfo;
import EventAttendee = Events.EventAttendee;

@Component({
    selector: 'events-share-event-page',
    templateUrl: './events-share-event-page.component.html',
    styleUrls: ['./events-share-event-page.component.scss']
})
export class EventsShareEventPageComponent extends PageComponent {

    constructor(protected location: Location, injector: Injector) {
        super(injector);
    }

    events: Events.Event[];

    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;

    @ViewChild(EventsUploadUserContactsFromCsvSwiperModalNoTemplateComponent, {static: true})
    events_upload_user_contacts_from_csv_swiper_modal_no_template_component: EventsUploadUserContactsFromCsvSwiperModalNoTemplateComponent;
    @ViewChild(EventsInviteToEventInShareEventModalComponent, {static: true})
    events_invite_to_event_in_share_event_modal_component: EventsInviteToEventInShareEventModalComponent;

    re_open_mass_messaging_modal: boolean;

    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 0);
        this.eventInfo$.subscribe(value => {
            this.eventInfo = value;
        });
    }

    navigateToMassMessaging() {
        this.router.navigateByUrl('signedin/userprofiles/blasts/default');
    }

    naviagateToDetailsPage() {
        this.router.navigateByUrl(`signedin/events/${this.eventInfo.event.event_id}/details`);
    }

    navigateToEditEvent() {
        const eventId = this.eventInfo.event.event_id; // Replace this with the actual eventId
        this.router.navigate(['/signedin/events/', eventId, 'editevent']);
    }

    goBack() {
        this.location.back();
    }

    reOpenInviteModal() {
        if (this.re_open_mass_messaging_modal) {
            setTimeout(() => {
                this.events_invite_to_event_in_share_event_modal_component.openModal();
                this.re_open_mass_messaging_modal = false;
            }, 500)

        }
    }

    openCsvUploadModal() {
        setTimeout(() => {
            this.re_open_mass_messaging_modal = true;
            this.events_upload_user_contacts_from_csv_swiper_modal_no_template_component.openModal();
        }, 500)


    }
}
