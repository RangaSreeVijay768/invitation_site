import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events, Users} from "@core/core.models";
import Event = Events.Event;
import EventInvite = Events.EventInvite;
import UserAccount = Users.UserAccount;
import EventLocation = Events.EventLocation;
// import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-view-user-profile-details-modal-content',
    templateUrl: './events-view-user-profile-details-modal-content.component.html',
    styleUrls: ['./events-view-user-profile-details-modal-content.component.scss']
})
export class EventsViewUserProfileDetailsModalContentComponent extends BaseModalContentComponent {


  eventInvites: EventInvite[];

  eventDetails: Event;

  @Input()
  userAccount: UserAccount;

  @Input()
  event: Events.Event;



  constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    initializeComponent() {
    }

}

