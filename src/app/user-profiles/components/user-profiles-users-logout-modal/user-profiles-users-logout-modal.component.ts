import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  UserProfilesUsersLogoutModalContentComponent
} from "@app/user-profiles/components/user-profiles-users-logout-modal/user-profiles-users-logout-modal-content/user-profiles-users-logout-modal-content.component";

@Component({
    selector: 'user-profiles-users-logout-modal',
    templateUrl: './user-profiles-users-logout-modal.component.html',
    styleUrls: ['./user-profiles-users-logout-modal.component.scss']
})
export class UserProfilesUsersLogoutModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(UserProfilesUsersLogoutModalContentComponent, {windowClass: 'user-profiles-users-logout-modal', scrollable: true});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
