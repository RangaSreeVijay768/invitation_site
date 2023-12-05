import {Component, Injector} from "@angular/core";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from "@core/core.models";
import EventTicket = Events.EventTicket;
import {Input} from '@angular/core';

@Component({
    selector: 'events-rsvp-free-modal-content',
    templateUrl: './events-rsvp-free-modal-content.component.html',
    styleUrls: ['./events-rsvp-free-modal-content.component.scss']
})
export class EventsRsvpFreeModalContentComponent extends BaseModalContentComponent {

    @Input()
    eventTicket: EventTicket;

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    initializeComponent() {
    }

}

