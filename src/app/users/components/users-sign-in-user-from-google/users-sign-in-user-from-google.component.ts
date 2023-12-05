import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {Users} from "@core/core.models";
import {UsersService} from "@users/users.service";
import {UsersRequests} from "@users/users.models";
import UserAuthToken = Users.UserAuthToken;
import SignInUserFromGoogle = UsersRequests.SignInUserFromGoogle;

@Component({
    selector: 'users-sign-in-user-from-google',
    templateUrl: './users-sign-in-user-from-google.component.html',
    styleUrls: ['./users-sign-in-user-from-google.component.scss']
})
export class UsersSignInUserFromGoogleComponent extends BaseComponent {

    @Input()
    code: string;

    user_auth_token: UserAuthToken;

    @Output()
    userAuthTokenReceived = new EventEmitter<UserAuthToken>();

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


    createRequestData(code?: string): SignInUserFromGoogle.Request {
        const request = new SignInUserFromGoogle.Request();
        request.code = code || this.code;
        return request;
    }

    sign_in_user_from_google_subscription$: Subscription;

    signInUserFromGoogle(request: SignInUserFromGoogle.Request) {
        this.sign_in_user_from_google_subscription$ = this.usersService.signInUserFromGoogle(request)
            .pipe(CommonsService.deserializeMap(SignInUserFromGoogle.Response))
            .subscribe(value => {
                this.user_auth_token = value;
                this.userAuthTokenReceived.emit(value);
            });
    }
}

@Component({
    selector: 'users-sign-in-user-from-google-no-template',
    templateUrl: './users-sign-in-user-from-google-no-template.component.html',
    styleUrls: ['./users-sign-in-user-from-google.component.scss']
})
export class UsersSignInUserFromGoogleNoTemplateComponent extends UsersSignInUserFromGoogleComponent {
}
