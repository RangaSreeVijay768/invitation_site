import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  UserProfilesEditGroupModalContentComponent
} from "@user-profiles/components/user-profiles-edit-group-modal/user-profiles-edit-group-modal-content/user-profiles-edit-group-modal-content.component";

@Component({
    selector: 'user-profiles-edit-group-modal',
    templateUrl: './user-profiles-edit-group-modal.component.html',
    styleUrls: ['./user-profiles-edit-group-modal.component.scss']
})
export class UserProfilesEditGroupModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(UserProfilesEditGroupModalContentComponent, {windowClass: 'events-invite-to-event-in-share-event-modal'});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
