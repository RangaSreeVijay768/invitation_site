import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    EventsShareEventModalContentComponent
} from '@events/components/events-share-event-modal/events-share-event-modal-content/events-share-event-modal-content.component';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'events-share-event-modal',
    templateUrl: './events-share-event-modal.component.html',
    styleUrls: ['./events-share-event-modal.component.scss']
})
export class EventsShareEventModalComponent extends BaseModalComponent {

    @Input()
    event: Event;

    constructor(injector: Injector) {
        super(injector);
    }


    openModal(event?: Event, params?) {
        super.open(EventsShareEventModalContentComponent, {windowClass: 'events-share-event-modal', scrollable: true});
        this.setModalData('event', event||this.event);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
