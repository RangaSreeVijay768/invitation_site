import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  BasicEventsEventDetailsTicketTypeModalContentComponent
} from '@basic/components/basic-events-event-details-ticket-type-modal/basic-events-event-details-ticket-type-modal-content/basic-events-event-details-ticket-type-modal-content.component';
import * as Events from 'events';

@Component({
    selector: 'basic-events-event-details-ticket-type-modal',
    templateUrl: './basic-events-event-details-ticket-type-modal.component.html',
    styleUrls: ['./basic-events-event-details-ticket-type-modal.component.scss']
})
export class BasicEventsEventDetailsTicketTypeModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;


    openModal(params?) {
        super.open(BasicEventsEventDetailsTicketTypeModalContentComponent, {windowClass: 'basic-events-event-details-ticket-type-modal', scrollable: true});
        this.setModalData('event', this.event);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
