import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import {Core, Events} from "@core/core.models";
import SortedPaginatedRequest = Core.SortedPaginatedRequest;
import {EventsService} from "@events/events.service";
import {EventsRequests} from "@events/events.models";
import GetAllEventInfos = EventsRequests.GetAllEventInfos;
import EventInfo = Events.EventInfo;
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';

@Component({
  selector: 'events-get-all-event-infos',
  templateUrl: './events-get-all-event-infos.component.html',
  styleUrls: ['./events-get-all-event-infos.component.scss']
})
export class EventsGetAllEventInfosComponent extends SortedPaginatedBaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  eventInfos: EventInfo[];

  @Output()
  eventInfosReceived = new EventEmitter<EventInfo[]>();

  initializeComponent() {
    this.getAllEventInfos(this.createRequestData());
  }

  createRequestData(first?: number, count?: number, column_name?: string, column_order?: string): GetAllEventInfos.Request {
    let request = new GetAllEventInfos.Request();
    request = this.setLimits(request, first, count);
    request = this.setColumnOrders(request, column_name, column_order);
    return request;
  }

  get_all_event_infos_subscription$: Subscription;

  getAllEventInfos(request: GetAllEventInfos.Request) {
    this.get_all_event_infos_subscription$ = this.eventsService.getAllEventInfos(request)
      .pipe(CommonsService.deserializeMap(GetAllEventInfos.Response))
      .subscribe(value => {
        this.eventInfos = value;
        this.eventInfosReceived.emit(value);
      });
  }


}

@Component({
  selector: 'events-get-all-event-infos-no-template',
  templateUrl: './events-get-all-event-infos-no-template.component.html',
  styleUrls: ['./events-get-all-event-infos.component.scss']
})
export class EventsGetAllEventInfosNoTemplateComponent extends EventsGetAllEventInfosComponent {
}

@Component({
  selector: 'events-get-all-event-infos-scrolling',
  templateUrl: './events-get-all-event-info-scrolling.component.html',
  styleUrls: ['./events-get-all-event-infos.component.scss']
})

export class EventsGetAllEventInfosNoTemplateComponentScrollingComponent extends BaseInfiniteScrollComponent<EventsGetAllEventInfosComponent> {

  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  performScrolling(): void {
    const scrolling_component = this.scrollingComponent;
    console.log('this is ', this.scrollingComponent);
    scrolling_component.getAllEventInfos(
      scrolling_component.createRequestData( this.currentCount, this.numberOfItems)
    );
  }

  print(event) {
    console.log(event);
  }

  protected readonly event = event;
}
