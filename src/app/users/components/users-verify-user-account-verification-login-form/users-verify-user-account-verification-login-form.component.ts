import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {USERS_VERIFY_USER_ACCOUNT_LAYOUT, USERS_VERIFY_USER_ACCOUNT_LOGIN_FORM_MODEL} from '@users/users.form.models';
import {UsersRequests} from '@users/users.models';
import VerifyUserAccountVerificationLogin = UsersRequests.VerifyUserAccountVerificationLogin;
import {Users} from '@core/core.models';
import MessageDelivery = Users.MessageDelivery;
import UserAuthToken = Users.UserAuthToken;
import {UsersService} from '@users/users.service';

@Component({
  selector: 'users-verify-user-account-verification-login-form',
  templateUrl: './users-verify-user-account-verification-login-form.component.html',
  styleUrls: ['./users-verify-user-account-verification-login-form.component.scss']
})
export class UsersVerifyUserAccountVerificationLoginFormComponent extends FormComponent {

  constructor(protected usersService: UsersService, injector: Injector) {
    super(injector);
  }

  user_auth_token: UserAuthToken;

  // phone_number: string;

  email_id: string;

  messageDelivery: MessageDelivery;

  formLayout = USERS_VERIFY_USER_ACCOUNT_LAYOUT;

  @Output()
  userAuthTokenReceived = new EventEmitter<UserAuthToken>();

  initializeComponent() {
  }

  afterInitializeComponent() {
  }

  getFormModel(): DynamicFormControlModel[] {
    return USERS_VERIFY_USER_ACCOUNT_LOGIN_FORM_MODEL();
  }

  createRequestData(): VerifyUserAccountVerificationLogin.Request {
    const request = new VerifyUserAccountVerificationLogin.Request();
    // request.email_id = 'sgganesh240@gmail.con';
    // request.phone_number = this.phone_number;
    request.verification_code = this.getInputModelValueAsString('verification_code');
    // request.verification_code = '101294';
    if (this.messageDelivery.message_type === 'SMS') {
      request.phone_number = this.email_id;
      this.messageDelivery.message_type = 'PHONE';
    }
    else {
      request.email_id = this.email_id;
    }

    request.verification_type = this.messageDelivery.message_type;
    //request.whats_app_number = this.email_id;

    return request;
  }

  sign_in_verification_subscription$: Subscription;

  verifyUserAccountVerficationLogin(request: VerifyUserAccountVerificationLogin.Request) {
    this.sign_in_verification_subscription$ = this.usersService.verifyUserAccountVerificationLogin(request)
      .pipe(CommonsService.deserializeMap(VerifyUserAccountVerificationLogin.Response))
      .subscribe(value => {
        this.userAuthTokenReceived.emit(value);
      });
  }
}
