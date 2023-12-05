import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'events-share-event-confirmation-modal-content',
    templateUrl: './events-share-event-confirmation-modal-content.component.html',
    styleUrls: ['./events-share-event-confirmation-modal-content.component.scss']
})
export class EventsShareEventConfirmationModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    initializeComponent() {
    }

}

