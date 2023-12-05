import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
import GetEventTicketInfoByEvent = EventsRequests.GetEventTicketInfoByEvent;
import {referenceEquality} from '@angular/compiler-cli/src/ngtsc/incremental/semantic_graph/src/util';
import {Events} from '@core/core.models';
import EventTicketInfo = Events.EventTicketInfo;

@Component({
    selector: 'events-get-event-ticket-info-by-event',
    templateUrl: './events-get-event-ticket-info-by-event.component.html',
    styleUrls: ['./events-get-event-ticket-info-by-event.component.scss']
})
export class EventsGetEventTicketInfoByEventComponent extends BaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    event_ticket_info: EventTicketInfo[];

    @Output()
    eventTicketInfoReceived = new EventEmitter<EventTicketInfo>;

    initializeComponent() {
      this.getEventTicketInfoByEvent(this.createRequestData());
    }

    createRequestData(): GetEventTicketInfoByEvent.Request {
      let request = new GetEventTicketInfoByEvent.Request();
      request.event = this.event.event_id;
      return request;
    }

    get_event_ticket_info_by_event_subscription$: Subscription;

    getEventTicketInfoByEvent(request: GetEventTicketInfoByEvent.Request) {
      this.get_event_ticket_info_by_event_subscription$ = this.eventsService.getEventTicketInfoByEvent(request)
        .pipe(CommonsService.deserializeMap(GetEventTicketInfoByEvent.Response))
        .subscribe(value => {
          this.event_ticket_info = value;
          this.eventTicketInfoReceived.emit(value);
        });
    }

}

@Component({
    selector: 'events-get-event-ticket-info-by-event-no-template',
    templateUrl: './events-get-event-ticket-info-by-event-no-template.component.html',
    styleUrls: ['./events-get-event-ticket-info-by-event.component.scss']
})
export class EventsGetEventTicketInfoByEventNoTemplateComponent extends EventsGetEventTicketInfoByEventComponent
{
}
