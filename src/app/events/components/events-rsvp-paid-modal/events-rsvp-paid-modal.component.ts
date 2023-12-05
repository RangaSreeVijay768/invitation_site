import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import{EventsRsvpPaidModalContentComponent} from "@events/components/events-rsvp-paid-modal/events-rsvp-paid-modal-content/events-rsvp-paid-modal-content.component";

@Component({
    selector: 'events-rsvp-paid-modal',
    templateUrl: './events-rsvp-paid-modal.component.html',
    styleUrls: ['./events-rsvp-paid-modal.component.scss']
})
export class EventsRsvpPaidModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(EventsRsvpPaidModalContentComponent, {windowClass:'events-rsvp-paid-modal', scrollable: true, fullscreen: 'lg'});
    }

    closeModal(){

    }


    performAction() {
    }

    initializeComponent() {
    }

}
