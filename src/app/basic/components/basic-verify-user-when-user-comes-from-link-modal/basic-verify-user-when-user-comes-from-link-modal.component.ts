import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  BasicVerifyUserWhenUserComesFromLinkModalContentComponent
} from '@basic/components/basic-verify-user-when-user-comes-from-link-modal/basic-verify-user-when-user-comes-from-link-modal-content/basic-verify-user-when-user-comes-from-link-modal-content.component';
import * as Events from 'events';

@Component({
    selector: 'basic-verify-user-when-user-comes-from-link-modal',
    templateUrl: './basic-verify-user-when-user-comes-from-link-modal.component.html',
    styleUrls: ['./basic-verify-user-when-user-comes-from-link-modal.component.scss']
})
export class BasicVerifyUserWhenUserComesFromLinkModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;


    openModal(params?) {
        super.open(BasicVerifyUserWhenUserComesFromLinkModalContentComponent, {windowClass: 'basic-verify-user-when-user-comes-from-link-modal', scrollable: true});
        this.setModalData('event', this.event)
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
