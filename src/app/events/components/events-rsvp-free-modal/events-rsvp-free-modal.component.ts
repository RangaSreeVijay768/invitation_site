import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    EventsRsvpFreeModalContentComponent
} from "@events/components/events-rsvp-free-modal/events-rsvp-free-modal-content/events-rsvp-free-modal-content.component";
import {Events} from "@core/core.models";
import Event = Events.Event;
import EventTicket = Events.EventTicket;

// import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-rsvp-free-modal',
    templateUrl: './events-rsvp-free-modal.component.html',
    styleUrls: ['./events-rsvp-free-modal.component.scss']
})
export class EventsRsvpFreeModalComponent extends BaseModalComponent {

    @Input()
    eventTicket: EventTicket;

    constructor(injector: Injector) {
        super(injector);
    }


    openModal(event?: string, params?) {
      console.log('this =', event);
      super.open(EventsRsvpFreeModalContentComponent, {
            windowClass: 'events-rsvp-free-modal',
            scrollable: true,
            fullscreen: 'lg'
        });
      this.setModalData('eventTicket', this.eventTicket);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
