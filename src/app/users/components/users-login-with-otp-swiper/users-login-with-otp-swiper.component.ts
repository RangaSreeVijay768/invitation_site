import {BaseComponent} from '@core/components/base.component';
import {Component, Injector, ViewChild} from '@angular/core';
import {Users} from '@core/core.models';
import Swiper from 'swiper';
import {GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {
    UsersSignInUserFromGoogleNoTemplateComponent
} from "@users/components/users-sign-in-user-from-google/users-sign-in-user-from-google.component";
import UserAuthToken = Users.UserAuthToken;

@Component({
    selector: 'users-login-with-otp-swiper',
    templateUrl: './users-login-with-otp-swiper.component.html',
    styleUrls: ['./users-login-with-otp-swiper.component.scss']
})
export class UsersLoginWithOtpSwiperComponent extends BaseComponent {

    constructor(injector: Injector, protected socialAuthService: SocialAuthService,) {
        super(injector);
    }

    @ViewChild('swiper')
    swiperEl: any;

    swiper: Swiper;

    @ViewChild(UsersSignInUserFromGoogleNoTemplateComponent, {static: true})
    users_sign_in_user_from_google_no_template_component: UsersSignInUserFromGoogleNoTemplateComponent;


    initializeComponent() {
        const swiperEl = document.querySelector('swiper-container');
        this.swiperEl = swiperEl;
        // @ts-ignore
        this.swiperEl.initialize();
        setTimeout(() => {
            this.swiper = this.swiperEl.nativeElement.swiper;
        }, 1000);
        this.socialAuthService.authState.subscribe((user) => {
            console.log(user);
            this.socialAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID)
                .then(accessToken => {
                    this.users_sign_in_user_from_google_no_template_component.signInUserFromGoogle(
                        this.users_sign_in_user_from_google_no_template_component.createRequestData(accessToken));
                });

        }, error => {
            console.log(error);
        });
    }

    slideNext() {
        console.log('SLIDING');
        this.swiper.slideNext();
    }

    setUserAuthTokenAndNavigate(response: UserAuthToken) {
        this.authService.setUserAuthToken(response);
        this.navigateToLoginPage();
    }

    navigateToLoginPage() {
        this.router.navigate(['/signedin/events/homepage']);
    }

}
