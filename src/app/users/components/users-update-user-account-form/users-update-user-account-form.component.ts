import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {UsersService} from '@users/users.service';
import {UsersRequests} from '@users/users.models';
import UpdateUserAccount = UsersRequests.UpdateUserAccount;
import {USERS_UPDATE_USER_ACCOUNT_FORM_LAYOUT, USERS_UPDATE_USER_ACCOUNT_FORM_MODEL} from '@users/users.form.models';
import {USER_PROFILES_PROFILE_EDIT_FORM_LAYOUT} from '@app/user-profiles/user-profiles.form.models';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;

@Component({
  selector: 'users-update-user-account-form',
  templateUrl: './users-update-user-account-form.component.html',
  styleUrls: ['./users-update-user-account-form.component.scss']
})
export class UsersUpdateUserAccountFormComponent extends FormComponent {

  @Input()
  userAccount: UserAccount;

  @Input()
  country: string;

  @Output()
  userAccountUpdated = new EventEmitter<boolean>();


  constructor(protected usersService: UsersService, injector: Injector) {
    super(injector);
  }

  formLayout = USERS_UPDATE_USER_ACCOUNT_FORM_LAYOUT;


  initializeComponent() {
  }

  print() {
  }

  afterInitializeComponent() {
    this.getInputModel('name').value =
      this.userAccount.display_name;
    this.getInputModel('email').value =
      this.userAccount.email_id;
    this.getInputModel('mob_num').value = this.userAccount.phone_number;
    // displayCountry = this.userAccount.country;
    if (this.userAccount.date_of_birth) {
      console.log('date of borth', CommonsService.getDateStringFromDatTime(this.userAccount.date_of_birth));
      // @ts-ignore
      this.getInputModel('b_day').value = {
        // @ts-ignore
        year: this.userAccount.date_of_birth.year,
        month: this.userAccount.date_of_birth.month,
        day: this.userAccount.date_of_birth.day
      };
    }
    console.log('bday', this.getInputModel('b_day').value);
    this.getInputModel('bio').value = this.userAccount.user_bio;
    this.getInputModel('instagram').value = this.userAccount.instagram_profile_url;
    this.getInputModel('country').value = this.userAccount.country;
    console.log('country : ', this.getInputModel('country').value);
  }

  getFormModel(): DynamicFormControlModel[] {
    return USERS_UPDATE_USER_ACCOUNT_FORM_MODEL();
  }

  createRequestData(country?: string, user_account_id?: string): UpdateUserAccount.Request {
    console.log('update : ', this.userAccount);
    const request = new UpdateUserAccount.Request();
    request.user_account_id = user_account_id || this.userAccount.user_account_id;
    request.email = this.getInputModelValueAsString('email');
    request.name = this.getInputModelValueAsString('name');
    // request.city = this.getInputModelValueAsString('city');
    request.country = this.getInputModelValueAsString('country');

    request.date_of_birth = CommonsService.getDateTimeFromDate(this.getDateModelValue('b_day'));
    request.user_bio = this.getInputModelValueAsString('bio');
    request.instagram_profile_url = this.getInputModelValueAsString('instagram');
    let ig_url = this.getInputModelValueAsString('instagram');
    if (ig_url.indexOf('http') !== -1) {
      request.instagram_profile_url = this.getInputModelValueAsString('instagram');
    } else {
      if (ig_url.indexOf('@') !== -1) {
        let updated_url = ig_url.replace('@', '');
        request.instagram_profile_url = 'http://instagram.com/' + updated_url;
      } else {
        request.instagram_profile_url = 'http://instagram.com/' + ig_url;
      }
    }
    return request;
  }


  update_user_account_subscription$: Subscription;

  updateUserAccount(request: UpdateUserAccount.Request) {
    this.update_user_account_subscription$ = this.usersService.updateUserAccount(request)
      .subscribe(value => {
        console.log('response ', request);
        this.userAccountUpdated.emit(value);
      });
  }
}
