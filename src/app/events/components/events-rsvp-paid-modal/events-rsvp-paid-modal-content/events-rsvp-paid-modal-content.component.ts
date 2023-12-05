import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'events-rsvp-paid-modal-content',
    templateUrl: './events-rsvp-paid-modal-content.component.html',
    styleUrls: ['./events-rsvp-paid-modal-content.component.scss']
})
export class EventsRsvpPaidModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    initializeComponent() {
    }

}

