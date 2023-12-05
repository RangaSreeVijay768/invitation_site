import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'user-profiles-create-user-contact-select-contact-type-modal-content',
    templateUrl: './user-profiles-create-user-contact-select-contact-type-modal-content.component.html',
    styleUrls: ['./user-profiles-create-user-contact-select-contact-type-modal-content.component.scss']
})
export class UserProfilesCreateUserContactSelectContactTypeModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    initializeComponent() {
    }

}

