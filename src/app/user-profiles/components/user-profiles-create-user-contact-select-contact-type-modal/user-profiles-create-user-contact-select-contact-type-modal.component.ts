import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  UserProfilesCreateUserContactSelectContactTypeModalContentComponent
} from '@user-profiles/components/user-profiles-create-user-contact-select-contact-type-modal/user-profiles-create-user-contact-select-contact-type-modal-content/user-profiles-create-user-contact-select-contact-type-modal-content.component';

@Component({
    selector: 'user-profiles-create-user-contact-select-contact-type-modal',
    templateUrl: './user-profiles-create-user-contact-select-contact-type-modal.component.html',
    styleUrls: ['./user-profiles-create-user-contact-select-contact-type-modal.component.scss']
})
export class UserProfilesCreateUserContactSelectContactTypeModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(UserProfilesCreateUserContactSelectContactTypeModalContentComponent, {windowClass: 'user-profiles-create-user-contact-select-contact-type-modal', scrollable: true});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
