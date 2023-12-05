import {Component, EventEmitter, Injector, Input, Output, ViewChild} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {
    EventsCreatePaidUserEventTicketFromOrderPaymentNoTemplateComponent
} from "@events/components/events-create-paid-user-event-ticket-from-order-payment/events-create-paid-user-event-ticket-from-order-payment.component";

@Component({
    selector: 'events-event-purchase-details-page',
    templateUrl: './events-event-purchase-details-page.component.html',
    styleUrls: ['./events-event-purchase-details-page.component.scss']
})
export class EventsEventPurchaseDetailsPageComponent extends PageComponent {



    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
