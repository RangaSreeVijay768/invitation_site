import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  BasicUsersLogoutModalContentComponent
} from "@basic/components/basic-users-logout-modal/basic-users-logout-modal-content/basic-users-logout-modal-content.component";

@Component({
    selector: 'basic-users-logout-modal',
    templateUrl: './basic-users-logout-modal.component.html',
    styleUrls: ['./basic-users-logout-modal.component.scss']
})
export class BasicUsersLogoutModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }


    openModal(params?) {
        super.open(BasicUsersLogoutModalContentComponent, {windowClass: 'basic-users-logout-modal', scrollable: true});
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
