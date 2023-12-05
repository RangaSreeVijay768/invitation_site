import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsRequests} from '@events/events.models';
import CreateEventInvite = EventsRequests.CreateEventInvite;
import {EventsService} from '@events/events.service';

@Component({
    selector: 'events-create-event-invite',
    templateUrl: './events-create-event-invite.component.html',
    styleUrls: ['./events-create-event-invite.component.scss']
})
export class EventsCreateEventInviteComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Output()
    eventInviteCreated = new EventEmitter<any>;

    initializeComponent() {
    }

    createRequestData(): CreateEventInvite.Request {
      const request = new CreateEventInvite.Request();
      return request;
    }

    create_event_invite_subscription$: Subscription;

    createEventInvite = (request: CreateEventInvite.Request) => {
      this.create_event_invite_subscription$ = this.eventsService.createEventInvite(request)
        .subscribe(value => {
          this.eventInviteCreated.emit(value);
        });
    }
}
