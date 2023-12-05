import {Component, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import EventTicketInfo = Events.EventTicketInfo;

@Component({
    selector: 'events-event-dashboard-ticket-details-ticket-type-page',
    templateUrl: './events-event-dashboard-ticket-details-ticket-type-page.component.html',
    styleUrls: ['./events-event-dashboard-ticket-details-ticket-type-page.component.scss']
})
export class EventsEventDashboardTicketDetailsTicketTypePageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    eventInfo$: Observable<EventInfo>;
    eventInfo: EventInfo;

    event_ticket_infos: EventTicketInfo[];

    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 2);
        this.eventInfo$.subscribe(value => {
            this.eventInfo = value;
        });
    }

    navigateToEventDetailsPage(event_id?: string) {
        this.router.navigateByUrl(`/signedin/events/${event_id}`);
    }

    navigateToEventInvitationPage(event_id?: string) {
        this.router.navigateByUrl(`/signedin/events/shareevent/${event_id}`);
    }


}
