import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsRequests} from '@events/events.models';
import GetAllEventInfos = EventsRequests.GetAllEventInfos;
import GetEventsFilterRequest = EventsRequests.GetEventsFilterRequest;
import {DateTime} from 'luxon';

@Component({
  selector: 'events-get-all-events-filter',
  templateUrl: './events-get-all-events-filter.component.html',
  styleUrls: ['./events-get-all-events-filter.component.scss']
})
export class EventsGetAllEventsFilterComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  event_type = 'Event type';
  event_time = 'This week';
  event_distance = 'Any distance';
  event_category = 'Any category';
  event_sort_by = 'Sort by: Relevance';

  @Output()
  eventsFilterRecieved = new EventEmitter<GetEventsFilterRequest>();

  initializeComponent() {
  }

  createRequestData(): GetEventsFilterRequest {
    const request = new GetEventsFilterRequest();
    return request;
  }

  getEventsFilter(request: GetEventsFilterRequest) {
    this.eventsFilterRecieved.emit(request);
  }

  protected readonly DateTime = DateTime;
  protected readonly CommonsService = CommonsService;
}

@Component({
  selector: 'events-get-all-events-filter-no-template',
  templateUrl: './events-get-all-events-filter-no-template.component.html',
  styleUrls: ['./events-get-all-events-filter.component.scss']
})
export class EventsGetAllEventsFilterNoTemplateComponent extends EventsGetAllEventsFilterComponent {
}
