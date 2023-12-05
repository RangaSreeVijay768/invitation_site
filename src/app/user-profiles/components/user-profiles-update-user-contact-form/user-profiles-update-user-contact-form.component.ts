import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {UsersRequests} from '@users/users.models';
import UpdateUserContact = UsersRequests.UpdateUserContact;
import {UsersService} from '@users/users.service';
import {
  USER_PROFILES_CREATE_USER_CONTACT_LAYOUT,
  USER_PROFILES_UPDATE_USER_CONTACT_FORM_MODEL,
  USER_PROFILES_UPDATE_USER_CONTACT_LAYOUT
} from '@user-profiles/user-profiles.form.models';
import {Users} from '@core/core.models';
import UserContact = Users.UserContact;

@Component({
  selector: 'user-profiles-update-user-contact-form',
  templateUrl: './user-profiles-update-user-contact-form.component.html',
  styleUrls: ['./user-profiles-update-user-contact-form.component.scss']
})
export class UserProfilesUpdateUserContactFormComponent extends FormComponent {

  constructor(injector: Injector, protected usersService: UsersService) {
    super(injector);
  }

  @Input()
  userContact: UserContact;

  @Output()
  userContactUpdated = new EventEmitter<boolean>();

  initializeComponent() {
  }

  formLayout = USER_PROFILES_UPDATE_USER_CONTACT_LAYOUT;


  afterInitializeComponent() {
    this.getInputModel('contact_type').value = this.userContact.contact_type;
    this.getInputModel('display_name').value = this.userContact.display_name;
    this.getInputModel('phone_number').value = this.userContact.phone_number;
    this.getInputModel('whatsapp_number').value = this.userContact.whatsapp_number;
    this.getInputModel('email_id').value = this.userContact.email_id;
  }

  getFormModel(): DynamicFormControlModel[] {
    return USER_PROFILES_UPDATE_USER_CONTACT_FORM_MODEL();
  }

  createRequestData(): UpdateUserContact.Request {
    const request = new UpdateUserContact.Request();
    request.userContactId = this.userContact.user_contact_id;
    return request;
  }

  update_user_contact_subscription$: Subscription;

  createUserContact = (request: UpdateUserContact.Request) => {
    this.update_user_contact_subscription$ = this.usersService.updateUserContact(request)
      .subscribe(value => {
        this.userContactUpdated.emit(value);
      });
  };
}
