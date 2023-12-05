import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
  USERS_SIGN_IN_USER_FORM_LAYOUT,
  USERS_START_LOGIN_USER_FORM_LAYOUT,
  USERS_START_LOGIN_USER_FORM_MODEL,
} from '@users/users.form.models';
import {UsersRequests} from '@users/users.models';
import StartLogin = UsersRequests.StartLogin;
import {UsersService} from '@users/users.service';
import {Users} from '@core/core.models';
import MessageDelivery = Users.MessageDelivery;
import UserAuthToken = Users.UserAuthToken;

@Component({
  selector: 'users-start-login-form',
  templateUrl: './users-start-login-form.component.html',
  styleUrls: ['./users-start-login-form.component.scss']
})
export class UsersStartLoginFormComponent extends FormComponent {

  constructor(protected usersService: UsersService, injector: Injector) {
    super(injector);
  }

  email_id: string;

  formLayout = USERS_START_LOGIN_USER_FORM_LAYOUT;

  messageDelivery: MessageDelivery;

  @Output()
  userSignInStarted = new EventEmitter<StartLogin.Response>();

  @Output()
  userAuthTokenReceived = new EventEmitter<UserAuthToken>();


  @Output()
  messageDeliveryReceived = new EventEmitter<MessageDelivery>();

  initializeComponent() {
  }

  afterInitializeComponent() {
  }

  getFormModel(): DynamicFormControlModel[] {
    return USERS_START_LOGIN_USER_FORM_MODEL();
  }

  createRequestData(): StartLogin.Request {
    const request = new StartLogin.Request();
    if (this.getInputModelValueAsString('email').length === 10){
      request.phone_number = this.getInputModelValueAsString('email');
      this.email_id = request.phone_number;
    }else {
      request.email_id = this.getInputModelValueAsString('email');
      this.email_id = request.email_id;
    }
    return request;
  }

  start_login_subscription$: Subscription;

  startLogin(request: StartLogin.Request) {
    // this.coreTestHttpClient.post('test', {});
    this.start_login_subscription$ = this.usersService.startLogin(request)
      .pipe(CommonsService.deserializeMap(StartLogin.Response))
      .subscribe(value => {
        console.log(value);
        this.userSignInStarted.emit(value);
        // this.user_auth_token = value;
        console.log('emitted', this.messageDeliveryReceived);
        this.userAuthTokenReceived.emit(value);
        this.messageDelivery = value;
        console.log('messageDelivery', this.messageDelivery);
        this.messageDeliveryReceived.emit(value);
      });
  }
}
