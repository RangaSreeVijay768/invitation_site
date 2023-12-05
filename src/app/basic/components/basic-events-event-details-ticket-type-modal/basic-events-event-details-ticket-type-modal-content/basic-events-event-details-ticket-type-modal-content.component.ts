import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;
import OrderCompleteInfo = Events.OrderCompleteInfo;
import {StripeService} from 'ngx-stripe';
import EventTicketInfo = Events.EventTicketInfo;

@Component({
  selector: 'basic-events-event-details-ticket-type-modal-content',
  templateUrl: './basic-events-event-details-ticket-type-modal-content.component.html',
  styleUrls: ['./basic-events-event-details-ticket-type-modal-content.component.scss']
})
export class BasicEventsEventDetailsTicketTypeModalContentComponent extends BaseModalContentComponent {

  constructor(activeModal: NgbActiveModal, protected stripeService: StripeService, injector: Injector) {
    super(activeModal, injector);
  }

  eventTickets: EventTicket[];

  @Input()
  event: Events.Event;

  @Output()
  proceedToPayClicked: EventEmitter<boolean>;

  event_ticket_infos: EventTicketInfo[];


  initializeComponent() {
    console.log(this.event, 'mdal');
  }

  proceedToPay(){
    this.proceedToPayClicked.emit(true);
  }

  selectedEventTicket: EventTicketInfo;

  amount = 0;

  // tslint:disable-next-line:variable-name
  no_of_tickets = 0;

  increaseTickets() {
    this.no_of_tickets++;
    this.amount = this.amount + this.selectedEventTicket.event_ticket_sale_item.item_current_price;
    console.log('ST =', this.no_of_tickets);
  }

  decreaseTickets() {
    if (this.no_of_tickets > 0) {
      this.amount = this.amount - this.selectedEventTicket.event_ticket_sale_item.item_current_price;
      this.no_of_tickets--;
    }
  }

  redirectToCheckout(order_complete_info: OrderCompleteInfo) {
    this.stripeService.redirectToCheckout({sessionId: order_complete_info.order_payment.payment_gateway_id})
      .subscribe(value => {
        console.log(value);
      });
  }
}

