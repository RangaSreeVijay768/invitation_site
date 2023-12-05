import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {EVENTS_LOCATION_AVAILABILITY_STATUS_FORM_MODEL} from '@events/events.form.models';
import {Events} from '@core/core.models';
import Event = Events.Event;
import EventAttendee = Events.EventAttendee;
import {
  EventsAddCoHostStatusComponent,
  EventsAddCoHostStatusNoTemplateComponent
} from '@events/components/events-add-co-host-status/events-add-co-host-status.component';
import {
  EventsRemoveCoHostStatusComponent,
  EventsRemoveCoHostStatusNoTemplateComponent
} from '@events/components/events-remove-co-host-status/events-remove-co-host-status.component';
import {
  EventsAddLocationAvailabilityStatusComponent
} from '@events/components/events-add-location-availability-status/events-add-location-availability-status.component';
import {
  EventsRemoveLocationAvailabilityStatusComponent
} from '@events/components/events-remove-location-availability-status/events-remove-location-availability-status.component';

@Component({
  selector: 'events-location-availability-status-form',
  templateUrl: './events-location-availability-status-form.component.html',
  styleUrls: ['./events-location-availability-status-form.component.scss']
})
export class EventsLocationAvailabilityStatusFormComponent extends FormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  @Input()
  event: Event;

  @ViewChild(EventsAddLocationAvailabilityStatusComponent, {static: true})
  events_add_location_availability_status: EventsAddLocationAvailabilityStatusComponent;

  @ViewChild(EventsRemoveLocationAvailabilityStatusComponent, {static: true})
  events_remove_location_availability_status: EventsRemoveLocationAvailabilityStatusComponent;

  initializeComponent() {
  }

  afterInitializeComponent() {
    // @ts-ignore
    this.getInputModel('location_availability_status').value = this.event.location_available_status === 'ACTIVE';
    this.getInputModel('location_availability_status').valueChanges.subscribe(value => {
      if (value) {
        this.events_add_location_availability_status.addLocationAvailableStatus(
          this.events_add_location_availability_status.createRequestData());
      } else {
        this.events_remove_location_availability_status.removeLocationAvailableStatus(
          this.events_remove_location_availability_status.createRequestData());
      }
    });
  }

  getFormModel(): DynamicFormControlModel[] {
    return EVENTS_LOCATION_AVAILABILITY_STATUS_FORM_MODEL();
  }
}
