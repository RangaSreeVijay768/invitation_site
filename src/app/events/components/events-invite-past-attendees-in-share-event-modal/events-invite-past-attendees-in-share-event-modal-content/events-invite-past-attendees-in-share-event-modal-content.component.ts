import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import EventAttendee = Events.Event;

@Component({
    selector: 'events-invite-past-attendees-in-share-event-modal-content',
    templateUrl: './events-invite-past-attendees-in-share-event-modal-content.component.html',
    styleUrls: ['./events-invite-past-attendees-in-share-event-modal-content.component.scss']
})
export class EventsInvitePastAttendeesInShareEventModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    @Input()
    event: EventAttendee;

    initializeComponent() {
    }

}

