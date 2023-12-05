import {Component, Injector, ViewChild} from "@angular/core";
import {Observable} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import {
    EventsCreatePaidUserEventTicketFromOrderPaymentNoTemplateComponent
} from "@events/components/events-create-paid-user-event-ticket-from-order-payment/events-create-paid-user-event-ticket-from-order-payment.component";
import OrderCompleteInfo = Events.OrderCompleteInfo;
import UserEventTicket = Events.UserEventTicket;

@Component({
    selector: 'events-order-payment-details-page',
    templateUrl: './events-order-payment-details-page.component.html',
    styleUrls: ['./events-order-payment-details-page.component.scss']
})
export class EventsOrderPaymentDetailsPageComponent extends PageComponent {

    confirmation_finished: boolean;

    user_event_ticket: UserEventTicket;

    @ViewChild(EventsCreatePaidUserEventTicketFromOrderPaymentNoTemplateComponent, {static: true})
    events_create_paid_user_event_ticket_from_order_payment_no_template_component: EventsCreatePaidUserEventTicketFromOrderPaymentNoTemplateComponent;

    constructor(injector: Injector) {
        super(injector);
    }


    orderCompleteInfo$: Observable<OrderCompleteInfo>;
    order_complete_info: OrderCompleteInfo;

    initializeComponent() {
        this.orderCompleteInfo$ = this.getRouterParameterObservable('orderCompleteInfo');
        this.orderCompleteInfo$.subscribe(value => {
            this.order_complete_info = value;
            setTimeout(() => {
                this.events_create_paid_user_event_ticket_from_order_payment_no_template_component.createPaidUserEventTicketFromOrderPayment(
                    this.events_create_paid_user_event_ticket_from_order_payment_no_template_component.createRequestData(
                        this.order_complete_info.order_payment.order_payment_id));
            }, 500)
        });
    }


}
