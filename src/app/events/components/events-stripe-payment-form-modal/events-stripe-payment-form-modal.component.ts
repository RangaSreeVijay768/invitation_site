import {Component, Injector, Input} from "@angular/core";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    EventsStripePaymentFormModalContentComponent
} from '@events/components/events-stripe-payment-form-modal/events-stripe-payment-form-modal-content/events-stripe-payment-form-modal-content.component';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;

@Component({
    selector: 'events-stripe-payment-form-modal',
    templateUrl: './events-stripe-payment-form-modal.component.html',
    styleUrls: ['./events-stripe-payment-form-modal.component.scss']
})
export class EventsStripePaymentFormModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    eventTicket: EventTicket;

    openModal(order_payment_id?: string, params?) {
        super.open(EventsStripePaymentFormModalContentComponent,
            {windowClass: 'events-stripe-payment-form-modal', scrollable: true});
        this.setModalData('eventTicket', this.eventTicket);
        this.setModalData('order_payment_id', order_payment_id);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
