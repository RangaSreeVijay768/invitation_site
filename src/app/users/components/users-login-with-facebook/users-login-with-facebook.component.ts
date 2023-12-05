import {Component} from '@angular/core';
import {FacebookLoginProvider, SocialAuthService, SocialUser} from '@abacritt/angularx-social-login';

@Component({
    selector: 'users-login-with-facebook',
    templateUrl: './users-login-with-facebook.component.html',
    styleUrls: ['./users-login-with-facebook.component.scss']
})
export class UsersLoginWithFacebookComponent {

    constructor(private authService: SocialAuthService) {
    }

    signInWithFB(): void {
        console.log(FacebookLoginProvider.PROVIDER_ID);
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
            console.log('user :>> ', user);
        })
            .catch((e) => {
                console.log('e :>> ', e);
            });
    }

    signOut(): void {
        this.authService.signOut();
    }
}
