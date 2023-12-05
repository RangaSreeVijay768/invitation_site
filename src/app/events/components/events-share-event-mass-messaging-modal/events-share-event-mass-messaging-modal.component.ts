import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  EventsShareEventMassMessagingModalContentComponent
} from '@events/components/events-share-event-mass-messaging-modal/events-share-event-mass-messaging-modal-content/events-share-event-mass-messaging-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'events-share-event-mass-messaging-modal',
    templateUrl: './events-share-event-mass-messaging-modal.component.html',
    styleUrls: ['./events-share-event-mass-messaging-modal.component.scss']
})
export class EventsShareEventMassMessagingModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Event;


    openModal(event:Event) {
        super.open(EventsShareEventMassMessagingModalContentComponent, {windowClass: 'events-share-event-modal', scrollable: true});
        this.setModalData('event', event||this.event);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
