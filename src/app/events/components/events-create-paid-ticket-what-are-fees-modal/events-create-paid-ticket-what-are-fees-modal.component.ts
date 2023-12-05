import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  EventsCreatePaidTicketWhatAreFeesModalContentComponent
} from "@events/components/events-create-paid-ticket-what-are-fees-modal/events-create-paid-ticket-what-are-fees-modal-content/events-create-paid-ticket-what-are-fees-modal-content.component";

@Component({
    selector: 'events-create-paid-ticket-what-are-fees-modal',
    templateUrl: './events-create-paid-ticket-what-are-fees-modal.component.html',
    styleUrls: ['./events-create-paid-ticket-what-are-fees-modal.component.scss']
})
export class EventsCreatePaidTicketWhatAreFeesModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(EventsCreatePaidTicketWhatAreFeesModalContentComponent, {windowClass: 'what-are-fees'});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
