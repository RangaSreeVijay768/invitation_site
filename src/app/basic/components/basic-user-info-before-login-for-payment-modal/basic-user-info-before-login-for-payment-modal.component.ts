import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  BasicUserInfoBeforeLoginForPaymentModalContentComponent
} from '@basic/components/basic-user-info-before-login-for-payment-modal/basic-user-info-before-login-for-payment-modal-content/basic-user-info-before-login-for-payment-modal-content.component';
import * as Events from 'events';

@Component({
    selector: 'basic-user-info-before-login-for-payment-modal',
    templateUrl: './basic-user-info-before-login-for-payment-modal.component.html',
    styleUrls: ['./basic-user-info-before-login-for-payment-modal.component.scss']
})
export class BasicUserInfoBeforeLoginForPaymentModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    event: Events.Event;

    openModal(params?) {
        super.open(BasicUserInfoBeforeLoginForPaymentModalContentComponent, {windowClass: 'basic-user-info-before-login-for-payment-modal', scrollable: true});
        this.setModalData('event', this.event);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
