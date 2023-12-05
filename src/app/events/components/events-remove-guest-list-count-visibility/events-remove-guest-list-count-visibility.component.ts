import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {Events} from "@core/core.models";
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import Event = Events.Event;
import RemoveGuestListCountVisibility = EventsRequests.RemoveGuestListCountVisibility;

@Component({
    selector: 'events-remove-guest-list-count-visibility',
    templateUrl: './events-remove-guest-list-count-visibility.component.html',
    styleUrls: ['./events-remove-guest-list-count-visibility.component.scss']
})
export class EventsRemoveGuestListCountVisibilityComponent extends BaseComponent {

    @Input()
    event: Event;

    @Output()
    guestListCountVisibilityRemoved = new EventEmitter<boolean>();


    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(event_id?: string): RemoveGuestListCountVisibility.Request {
        const request = new RemoveGuestListCountVisibility.Request();
        request.event = event_id || this.event.event_id;
        return request;
    }

    remove_guest_list_count_visibility_subscription$: Subscription;

    removeGuestListCountVisibility(request: RemoveGuestListCountVisibility.Request) {
        this.remove_guest_list_count_visibility_subscription$ =
            this.eventsService.removeGuestListCountVisibility(request)
                .subscribe(value => {
                    console.log('removed');
                    this.guestListCountVisibilityRemoved.emit(true);

                });
    }
}

@Component({
    selector: 'events-remove-guest-list-count-visibility-no-template',
    templateUrl: './events-remove-guest-list-count-visibility-no-template.component.html',
    styleUrls: ['./events-remove-guest-list-count-visibility.component.scss']
})
export class EventsRemoveGuestListCountVisibilityNoTemplateComponent
    extends EventsRemoveGuestListCountVisibilityComponent {
}
