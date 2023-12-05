import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsRequests} from "@events/events.models";
import GetEventInfo = EventsRequests.GetEventInfo;
import {EventsService} from "@events/events.service";
import {Events} from "@core/core.models";
// import EventInvite = Events.EventInvite;
import Event = Events.Event;
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
// import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-get-event-info',
    templateUrl: './events-get-event-info.component.html',
    styleUrls: ['./events-get-event-info.component.scss']
})
export class EventsGetEventInfoComponent extends SortedPaginatedBaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }
  @Input()
  event: Event;

  event_invites: Event[];

  @Output()
  eventInvitesReceived = new EventEmitter<Event[]>();

  // eventInvites: EventInvite[];

  // @Output()
  // eventInvitesReceived = new EventEmitter<EventInvite[]>();

    initializeComponent() {
      // this.getEventInfo(this.createRequestData());
    }

  createRequestData(first?: number, count?: number, column_name?: string,
                    column_order?: string): GetEventInfo.Request {
    let request = new GetEventInfo.Request();
    request.event_id = this.event.event_id;
    request = this.setLimits(request, first, count);
    request = this.setColumnOrders(request, column_name, column_order);
    return request;
  }

  get_event_info_subscription$: Subscription;

  getEventInfo(request: GetEventInfo.Request) {
    this.get_event_info_subscription$ = this.eventsService.getEventInfo(request)
        .pipe(CommonsService.deserializeMap(GetEventInfo.Response))
        .subscribe(value => {
          this.event_invites = value;
          this.eventInvitesReceived.emit(value);
        });
  }



}

@Component({
    selector: 'events-get-event-info-no-template',
    templateUrl: './events-get-event-info-no-template.component.html',
    styleUrls: ['./events-get-event-info.component.scss']
})
export class EventsGetEventInfoNoTemplateComponent extends EventsGetEventInfoComponent
{
}
