import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Users} from '@core/core.models';
import UserContact = Users.UserContact;

@Component({
  selector: 'user-profiles-update-user-contact-modal-content',
  templateUrl: './user-profiles-update-user-contact-modal-content.component.html',
  styleUrls: ['./user-profiles-update-user-contact-modal-content.component.scss']
})
export class UserProfilesUpdateUserContactModalContentComponent extends BaseModalContentComponent {

  constructor(activeModal: NgbActiveModal, injector: Injector) {
    super(activeModal, injector);
  }

  @Input()
  userContact: UserContact;

  initializeComponent() {
  }

}

