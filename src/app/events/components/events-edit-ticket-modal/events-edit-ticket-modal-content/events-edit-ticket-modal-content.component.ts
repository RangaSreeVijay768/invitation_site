import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;

@Component({
    selector: 'events-edit-ticket-modal-content',
    templateUrl: './events-edit-ticket-modal-content.component.html',
    styleUrls: ['./events-edit-ticket-modal-content.component.scss']
})
export class EventsEditTicketModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    @Input()
    event_ticket: EventTicket;

    initializeComponent() {
      console.log('event ticket in edit ticket ', this.event_ticket);
    }

}

