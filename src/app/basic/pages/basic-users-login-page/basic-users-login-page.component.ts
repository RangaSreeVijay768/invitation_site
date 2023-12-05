import {Component, Injector} from "@angular/core";
import {PageComponent} from "@core/components/page.component";
import {UsersRequests} from "@users/users.models";
import SignIn = UsersRequests.SignIn;
import {Users} from "@core/core.models";
import UserAuthToken = Users.UserAuthToken;

@Component({
    selector: 'basic-users-login-page',
    templateUrl: './basic-users-login-page.component.html',
    styleUrls: ['./basic-users-login-page.component.scss']
})
export class BasicUsersLoginPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    setUserAuthTokenAndNavigate(response: UserAuthToken) {
        this.authService.setUserAuthToken(response);
        this.navigateToLoginPage();
    }
    navigateToLoginPage() {
        this.router.navigate(['/signedin']);
    }

}
