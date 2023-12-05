import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
import RemoveLocationAvailableStatus = EventsRequests.RemoveLocationAvailableStatus;
import {Events} from '@core/core.models';
import EventAttendee = Events.EventAttendee;
import {
  EventsAddCoHostStatusComponent,
  EventsAddCoHostStatusNoTemplateComponent
} from '@events/components/events-add-co-host-status/events-add-co-host-status.component';
import {
  EventsRemoveCoHostStatusComponent,
  EventsRemoveCoHostStatusNoTemplateComponent
} from '@events/components/events-remove-co-host-status/events-remove-co-host-status.component';

@Component({
  selector: 'events-remove-location-availability-status',
  templateUrl: './events-remove-location-availability-status.component.html',
  styleUrls: ['./events-remove-location-availability-status.component.scss']
})
export class EventsRemoveLocationAvailabilityStatusComponent extends BaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  @Input()
  event: Events.Event;

  initializeComponent() {
  }

  @Output()
  locationStatusRemoved = new EventEmitter<boolean>();

  createRequestData(event_id?: string): RemoveLocationAvailableStatus.Request {
    const request = new RemoveLocationAvailableStatus.Request();
    request.event_id = this.event.event_id;
    return request;
  }

  remove_location_availability_status_subscription$: Subscription;

  removeLocationAvailableStatus(request: RemoveLocationAvailableStatus.Request) {
    this.remove_location_availability_status_subscription$ = this.eventsService.removeLocationAvailableStatus(request)
      .subscribe(value => {
        this.locationStatusRemoved.emit(true);
      });
  }

}

@Component({
  selector: 'events-remove-location-availability-status-no-template',
  templateUrl: './events-remove-location-availability-status-no-template.component.html',
  styleUrls: ['./events-remove-location-availability-status.component.scss']
})
export class EventsRemoveLocationAvailabilityStatusNoTemplateComponent extends EventsRemoveLocationAvailabilityStatusComponent {
}
