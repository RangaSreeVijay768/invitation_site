import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  EventsShareEventConfirmationModalContentComponent
} from "@events/components/events-share-event-confirmation-modal/events-share-event-confirmation-modal-content/events-share-event-confirmation-modal-content.component";

@Component({
    selector: 'events-share-event-confirmation-modal',
    templateUrl: './events-share-event-confirmation-modal.component.html',
    styleUrls: ['./events-share-event-confirmation-modal.component.scss']
})
export class EventsShareEventConfirmationModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(EventsShareEventConfirmationModalContentComponent, {windowClass: 'user-profiles-user-attended-events-modal'});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
