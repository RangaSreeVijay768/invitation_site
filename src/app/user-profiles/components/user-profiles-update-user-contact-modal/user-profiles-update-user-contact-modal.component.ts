import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
  UserProfilesUpdateUserContactModalContentComponent
} from '@user-profiles/components/user-profiles-update-user-contact-modal/user-profiles-update-user-contact-modal-content/user-profiles-update-user-contact-modal-content.component';
import {Users} from '@core/core.models';
import UserContact = Users.UserContact;

@Component({
  selector: 'user-profiles-update-user-contact-modal',
  templateUrl: './user-profiles-update-user-contact-modal.component.html',
  styleUrls: ['./user-profiles-update-user-contact-modal.component.scss']
})
export class UserProfilesUpdateUserContactModalComponent extends BaseModalComponent {


  constructor(injector: Injector) {
    super(injector);
  }

  @Input()
  userContact: UserContact;


  openModal(params?) {
    console.log('user contact is ', this.userContact);
    super.open(UserProfilesUpdateUserContactModalContentComponent, {windowClass: 'user-profiles-update-user-contact-modal', scrollable: true});
    this.setModalData('userContact', this.userContact);
  }

  closeModal() {
  }

  performAction() {
  }

  initializeComponent() {
  }

}
