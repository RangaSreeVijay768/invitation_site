import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {EventsAllInvitedPeopleModalContentComponent} from "@events/components/events-all-invited-people-modal/events-all-invited-people-modal-content/events-all-invited-people-modal-content.component";
import {Events} from "@core/core.models";
import EventInvite = Events.EventInvite;
import Event = Events.Event;

@Component({
    selector: 'events-all-invited-people-modal',
    templateUrl: './events-all-invited-people-modal.component.html',
    styleUrls: ['./events-all-invited-people-modal.component.scss']
})
export class EventsAllInvitedPeopleModalComponent extends BaseModalComponent {

    @Input()
    event: Event;

    @Input()
    eventInvites: EventInvite[];

    constructor(injector: Injector) {
        super(injector);
    }

    openModal(params?) {
        super.open(EventsAllInvitedPeopleModalContentComponent, {windowClass: 'events-all-invited-people-modal', scrollable: true});
        this.setModalData('eventInvites', this.eventInvites);
        this.setModalData('event', this.event);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
