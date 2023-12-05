import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
import GetOrCreateEventInvitationCodeByUserAccountAndEvent = EventsRequests.GetOrCreateEventInvitationCodeByUserAccountAndEvent;
import {Events} from '@core/core.models';
import EventInvitationCode = Events.EventInvitationCode;

@Component({
    selector: 'events-get-or-create-event-invitation-codes-by-user-account-and-event',
    templateUrl: './events-get-or-create-event-invitation-codes-by-user-account-and-event.component.html',
    styleUrls: ['./events-get-or-create-event-invitation-codes-by-user-account-and-event.component.scss']
})
export class EventsGetOrCreateEventInvitationCodesByUserAccountAndEventComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    initializeComponent() {
      this.getOrCreateEventInvitationCodeByUserAccountAndEvent(this.createRequestData());
    }

    @Output()
    eventInvitationCodesRecieved = new EventEmitter<EventInvitationCode>;

    createRequestData(): GetOrCreateEventInvitationCodeByUserAccountAndEvent.Request {
      const request = new GetOrCreateEventInvitationCodeByUserAccountAndEvent.Request();
      request.event = this.event.event_id;
      return request;
    }


    get_or_create_event_invitation_codes_by_user_account_and_event_subscription$: Subscription;

    getOrCreateEventInvitationCodeByUserAccountAndEvent(request: GetOrCreateEventInvitationCodeByUserAccountAndEvent.Request) {
      this.get_or_create_event_invitation_codes_by_user_account_and_event_subscription$ = this.eventsService.getOrCreateEventInvitationCodeByUserAccountAndEvent(request)
        .pipe(CommonsService.deserializeMap(GetOrCreateEventInvitationCodeByUserAccountAndEvent.Response))
        .subscribe(value => {
          this.eventInvitationCodesRecieved.emit(value);
        });
    }

}

@Component({
    selector: 'events-get-or-create-event-invitation-codes-by-user-account-and-event-no-template',
    templateUrl: './events-get-or-create-event-invitation-codes-by-user-account-and-event-no-template.component.html',
    styleUrls: ['./events-get-or-create-event-invitation-codes-by-user-account-and-event.component.scss']
})
export class EventsGetOrCreateEventInvitationCodesByUserAccountAndEventNoTemplateComponent extends EventsGetOrCreateEventInvitationCodesByUserAccountAndEventComponent
{
}
