import {Component, EventEmitter, Injector, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Events} from '@core/core.models';
import {EventsRequests} from '@events/events.models';
import GetEventLocationsByEvent = EventsRequests.GetEventLocationsByEvent;
import Event = Events.Event;
import EventLocation = Events.EventLocation;
import {EventsService} from '@events/events.service';
// import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-get-event-locations-by-event',
    templateUrl: './events-get-event-locations-by-event.component.html',
    styleUrls: ['./events-get-event-locations-by-event.component.scss']
})
export class EventsGetEventLocationsByEventComponent extends SortedPaginatedBaseComponent {

  @Input()
  event: Event;

  eventLocations: EventLocation[];

  @Output()
  eventLocationsReceived = new EventEmitter<EventLocation[]>();

  get_event_locations_by_event_subscription$: Subscription;

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
    this.getEventLocationsByEvent(this.createRequestData());
  }

  createRequestData(first?: number, count?: number, column_name?: string, column_order?: string): GetEventLocationsByEvent.Request {
    let request = new GetEventLocationsByEvent.Request();
    request.event = this.event.event_id;
    request = this.setLimits(request, first, count);
    request = this.setColumnOrders(request, column_name, column_order);
    return request;
  }


  getEventLocationsByEvent(request: GetEventLocationsByEvent.Request) {
    this.get_event_locations_by_event_subscription$ = this.eventsService.getEventLocationsByEvent(request)
      .pipe(CommonsService.deserializeMap(GetEventLocationsByEvent.Response))
      .subscribe(value => {
        this.eventLocations = value;
        this.eventLocationsReceived.emit(value);
      });
  }
}

@Component({
    selector: 'events-get-event-locations-by-event-no-template',
    templateUrl: './events-get-event-locations-by-event-no-template.component.html',
    styleUrls: ['./events-get-event-locations-by-event.component.scss']
})
export class EventsGetEventLocationsByEventNoTemplateComponent extends EventsGetEventLocationsByEventComponent
{
}
