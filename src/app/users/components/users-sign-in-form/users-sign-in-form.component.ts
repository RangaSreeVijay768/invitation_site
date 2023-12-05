import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {UsersRequests} from '@users/users.models';
import {UsersService} from '@users/users.service';
import {USERS_SIGN_IN_USER_FORM_LAYOUT, USERS_SIGN_IN_USER_FORM_MODEL} from '@users/users.form.models';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import SignIn = UsersRequests.SignIn;

@Component({
    selector: 'users-sign-in-form',
    templateUrl: './users-sign-in-form.component.html',
    styleUrls: ['./users-sign-in-form.component.scss']
})
export class UsersSignInFormComponent extends FormComponent {

    @Output()
    userSignInCreated = new EventEmitter<SignIn.Response>();

    formLayout = USERS_SIGN_IN_USER_FORM_LAYOUT;

    constructor(protected usersService: UsersService,
                injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USERS_SIGN_IN_USER_FORM_MODEL();
    }

  navigateToForgotPasswordPage() {
    this.router.navigate(['/forgotpassword']);
  }

    createRequestData(): SignIn.Request {
        const request = new SignIn.Request();
        request.email = this.getInputModelValueAsString('email');
        request.password = this.getInputModelValueAsString('password');
        return request;
    }

    sign_in_subscription$: Subscription;

    signIn(request: SignIn.Request) {
        // this.coreTestHttpClient.post('test', {});
        this.sign_in_subscription$ = this.usersService.signIn(request)
            .pipe(CommonsService.deserializeMap(SignIn.Response))
            .subscribe(value => {
              console.log(value);
              this.userSignInCreated.emit(value);
            });
    }
}
