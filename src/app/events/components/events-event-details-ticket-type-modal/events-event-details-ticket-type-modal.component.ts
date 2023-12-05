import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
  EventsEventDetailsTicketTypeModalContentComponent
} from '@events/components/events-event-details-ticket-type-modal/events-event-details-ticket-type-modal-content/events-event-details-ticket-type-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;
import EventTicket = Events.EventTicket;

@Component({
  selector: 'events-event-details-ticket-type-modal',
  templateUrl: './events-event-details-ticket-type-modal.component.html',
  styleUrls: ['./events-event-details-ticket-type-modal.component.scss']
})
export class EventsEventDetailsTicketTypeModalComponent extends BaseModalComponent {

  @Input()
  event: Event;

  constructor(injector: Injector) {
    super(injector);
  }

  openModal(params?) {
    super.open(EventsEventDetailsTicketTypeModalContentComponent, {windowClass: 'events-event-details-ticket-type-modal', scrollable:true});
    this.setModalData('event', this.event);
  }

  closeModal() {
  }

  performAction() {
  }

  initializeComponent() {
  }

}
