import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import EventAttendee = Events.EventAttendee;
import {EventsRequests} from '@events/events.models';
import GetEventAttendees = EventsRequests.GetEventAttendees;

@Component({
    selector: 'events-get-event-attendees',
    templateUrl: './events-get-event-attendees.component.html',
    styleUrls: ['./events-get-event-attendees.component.scss']
})
export class EventsGetEventAttendeesComponent extends BaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  @Input()
  eventAttendee: EventAttendee;

  @Output()
  eventAttendeesReceived = new EventEmitter<EventAttendee>();

  initializeComponent() {
    this.getEventAttendees(this.createRequestData());
  }

  createRequestData(): GetEventAttendees.Request {
    const request = new GetEventAttendees.Request();
    request.event_attendee_id = this.eventAttendee.event_attendee_id;
    return request;
  }

  get_event_attendees_subscription$: Subscription;

  getEventAttendees(request: GetEventAttendees.Request) {
    this.get_event_attendees_subscription$ = this.eventsService.getEventAttendees(request)
      .pipe(CommonsService.deserializeMap(GetEventAttendees.Response))
      .subscribe(value => {
        this.eventAttendee = value;
        this.eventAttendeesReceived.emit(value);
      });
  }

}

@Component({
    selector: 'events-get-event-attendees-no-template',
    templateUrl: './events-get-event-attendees-no-template.component.html',
    styleUrls: ['./events-get-event-attendees.component.scss']
})
export class EventsGetEventAttendeesNoTemplateComponent extends EventsGetEventAttendeesComponent
{
}
