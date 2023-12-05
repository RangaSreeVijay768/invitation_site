import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import EventTicket = Events.EventTicket;

@Component({
    selector: 'basic-user-info-before-login-for-payment-modal-content',
    templateUrl: './basic-user-info-before-login-for-payment-modal-content.component.html',
    styleUrls: ['./basic-user-info-before-login-for-payment-modal-content.component.scss']
})
export class BasicUserInfoBeforeLoginForPaymentModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    @Input()
    event: Events.Event;

    initializeComponent() {
    }

}

