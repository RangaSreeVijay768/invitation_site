import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'user-profiles-blasts-invite-contacts-to-event-modal-content',
    templateUrl: './user-profiles-blasts-invite-contacts-to-event-modal-content.component.html',
    styleUrls: ['./user-profiles-blasts-invite-contacts-to-event-modal-content.component.scss']
})
export class UserProfilesBlastsInviteContactsToEventModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    initializeComponent() {
    }

}

