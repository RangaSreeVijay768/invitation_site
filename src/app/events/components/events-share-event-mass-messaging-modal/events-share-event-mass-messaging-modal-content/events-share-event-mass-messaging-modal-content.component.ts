import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import Event = Events.Event;
import {truncate} from "lodash";

@Component({
    selector: 'events-share-event-mass-messaging-modal-content',
    templateUrl: './events-share-event-mass-messaging-modal-content.component.html',
    styleUrls: ['./events-share-event-mass-messaging-modal-content.component.scss']
})
export class EventsShareEventMassMessagingModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    event: Event;

    initializeComponent() {
        console.log(this.event)
    }

    protected readonly truncate = truncate;
}

