import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsRequests} from '@events/events.models';
import GetEventInvitationCode = EventsRequests.GetEventInvitationCode;
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import EventInvitationCode = Events.EventInvitationCode;

@Component({
  selector: 'events-get-event-invitation-code',
  templateUrl: './events-get-event-invitation-code.component.html',
  styleUrls: ['./events-get-event-invitation-code.component.scss']
})
export class EventsGetEventInvitationCodeComponent extends BaseComponent {

  @Input()
  invitationCode: string;

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
    this.getEventInvitationCode(this.createRequestData());
  }

  @Output()
  eventInvitationCodeReceived = new EventEmitter<EventInvitationCode>();

  get_event_invitation_code_subscription$: Subscription;

  createRequestData(): GetEventInvitationCode.Request {
    let request = new GetEventInvitationCode.Request();
    request.eventInvitationCodeId = this.invitationCode;
    return request;
  }

  getEventInvitationCode(request: GetEventInvitationCode.Request) {
    this.get_event_invitation_code_subscription$ = this.eventsService.getEventInvitationCode(request)
      .pipe(CommonsService.deserializeMap(GetEventInvitationCode.Response))
      .subscribe(value => {
        this.eventInvitationCodeReceived.emit(value);
      });
  }

}

@Component({
  selector: 'events-get-event-invitation-code-no-template',
  templateUrl: './events-get-event-invitation-code-no-template.component.html',
  styleUrls: ['./events-get-event-invitation-code.component.scss']
})
export class EventsGetEventInvitationCodeNoTemplateComponent extends EventsGetEventInvitationCodeComponent {
}
