import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import {StripeService} from "ngx-stripe";
import Event = Events.Event;
import EventTicket = Events.EventTicket;
import OrderCompleteInfo = Events.OrderCompleteInfo;
import EventTicketInfo = Events.EventTicketInfo;

@Component({
    selector: 'events-event-details-ticket-type-modal-content',
    templateUrl: './events-event-details-ticket-type-modal-content.component.html',
    styleUrls: ['./events-event-details-ticket-type-modal-content.component.scss']
})
export class EventsEventDetailsTicketTypeModalContentComponent extends BaseModalContentComponent {


    constructor(activeModal: NgbActiveModal, protected stripeService: StripeService, injector: Injector) {
        super(activeModal, injector);
    }

    event_tickets: EventTicketInfo[];

    event_ticket_infos: EventTicketInfo[];

    selected_event_ticket_info: EventTicketInfo;

    @Input()
    event: Event;

    selected_event_ticket: EventTicketInfo;

    amount = 0;

    // tslint:disable-next-line:variable-name
    no_of_tickets = 0;

    increaseTickets() {
        this.no_of_tickets++;
        this.amount = this.amount + this.selected_event_ticket.event_ticket_sale_item.item_current_price;
        console.log('ST =', this.selected_event_ticket);
    }

    decreaseTickets() {
        if (this.no_of_tickets > 0) {
          this.amount = this.amount - this.selected_event_ticket.event_ticket_sale_item.item_current_price;
          this.no_of_tickets--;
        }
    }

    print(){
      console.log('rvr', this.event_ticket_infos);
    }
    initializeComponent() {
    }

    redirectToCheckout(order_complete_info: OrderCompleteInfo) {
        this.stripeService.redirectToCheckout({sessionId: order_complete_info.order_payment.payment_gateway_id})
            .subscribe(value => {
                console.log(value);
            });
    }
}

