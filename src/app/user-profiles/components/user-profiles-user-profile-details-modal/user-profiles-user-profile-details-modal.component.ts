import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  EventsViewUserProfileDetailsModalComponent
} from '@events/components/events-view-user-profile-details-modal/events-view-user-profile-details-modal.component';
import {
  EventsViewUserProfileDetailsModalContentComponent
} from '@events/components/events-view-user-profile-details-modal/events-view-user-profile-details-modal-content/events-view-user-profile-details-modal-content.component';

@Component({
    selector: 'user-profiles-user-profile-details-modal',
    templateUrl: './user-profiles-user-profile-details-modal.component.html',
    styleUrls: ['./user-profiles-user-profile-details-modal.component.scss']
})
export class UserProfilesUserProfileDetailsModalComponent extends EventsViewUserProfileDetailsModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    openModal(params?) {
        super.open(EventsViewUserProfileDetailsModalContentComponent, {windowClass: 'user-profiles-user-profile-details-modal'});
        this.setModalData('event', this.event);
        this.setModalData('userAccount', this.userAccount);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
