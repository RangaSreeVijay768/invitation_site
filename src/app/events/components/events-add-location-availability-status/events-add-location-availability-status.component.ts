import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
import AddLocationAvailableStatus = EventsRequests.AddLocationAvailableStatus;
import {Events} from '@core/core.models';
@Component({
  selector: 'events-add-location-availability-status',
  templateUrl: './events-add-location-availability-status.component.html',
  styleUrls: ['./events-add-location-availability-status.component.scss']
})
export class EventsAddLocationAvailabilityStatusComponent extends BaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  @Input()
  event: Events.Event;

  initializeComponent() {
  }

  @Output()
  locationStatusAdded = new EventEmitter<boolean>();

  createRequestData(event_id?: string): AddLocationAvailableStatus.Request {
    const request = new AddLocationAvailableStatus.Request();
    request.event_id = this.event.event_id;
    return request;
  }

  add_location_availability_status_subscription$: Subscription;

  addLocationAvailableStatus(request: AddLocationAvailableStatus.Request) {
    this.add_location_availability_status_subscription$ = this.eventsService.addLocationAvailableStatus(request)
      .subscribe(value => {
        this.locationStatusAdded.emit(true);
      });
  }

}

@Component({
  selector: 'events-add-location-availability-status-no-template',
  templateUrl: './events-add-location-availability-status-no-template.component.html',
  styleUrls: ['./events-add-location-availability-status.component.scss']
})
export class EventsAddLocationAvailabilityStatusNoTemplateComponent extends EventsAddLocationAvailabilityStatusComponent {
}
