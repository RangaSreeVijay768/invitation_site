import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {Events} from "@core/core.models";
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import Event = Events.Event;
import ShowGuestListCountVisibility = EventsRequests.ShowGuestListCountVisibility;

@Component({
    selector: 'events-show-guest-list-count-visibility',
    templateUrl: './events-show-guest-list-count-visibility.component.html',
    styleUrls: ['./events-show-guest-list-count-visibility.component.scss']
})
export class EventsShowGuestListCountVisibilityComponent extends BaseComponent {

    @Input()
    event: Event;

    @Output()
    guestListCountVisibilityAdded = new EventEmitter<boolean>();

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(event_id?: string): ShowGuestListCountVisibility.Request {
        const request = new ShowGuestListCountVisibility.Request();
        request.event = event_id || this.event.event_id;
        return request;
    }

    show_guest_list_count_visibility_subscription$: Subscription;

    showGuestListCountVisibility(request: ShowGuestListCountVisibility.Request) {
        this.show_guest_list_count_visibility_subscription$ = this.eventsService.showGuestListCountVisibility(request)
            .subscribe(value => {
                this.guestListCountVisibilityAdded.emit(true);
            });
    }
}

@Component({
    selector: 'events-show-guest-list-count-visibility-no-template',
    templateUrl: './events-show-guest-list-count-visibility-no-template.component.html',
    styleUrls: ['./events-show-guest-list-count-visibility.component.scss']
})
export class EventsShowGuestListCountVisibilityNoTemplateComponent extends EventsShowGuestListCountVisibilityComponent {
}
