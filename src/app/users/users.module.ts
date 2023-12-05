import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {UsersSignInFormComponent} from '@users/components/users-sign-in-form/users-sign-in-form.component';

import {UsersSignUpFormComponent} from './components/users-sign-up-form/users-sign-up-form.component';
import {
    UsersSignOutComponent, UsersSignOutNoTemplateComponent
} from './components/users-sign-out/users-sign-out.component';
import {
    UsersUpdateUserAccountFormComponent
} from './components/users-update-user-account-form/users-update-user-account-form.component';
import {
    UsersVerifyUserAccountFormComponent
} from './components/users-verify-user-account-form/users-verify-user-account-form.component';
import {
    UsersUserSignUpSliderComponent
} from './components/users-user-sign-up-slider/users-user-sign-up-slider.component';
import {
    UserProfilesStartEventBlastNoTemplateComponent
} from '@app/user-profiles/components/user-profiles-start-event-blast/user-profiles-start-event-blast.component';
import {
    UserProfilesAddEventBlastRecipientNoTemplateComponent
} from '@app/user-profiles/components/user-profiles-add-event-blast-recipient/user-profiles-add-event-blast-recipient.component';
import {
    UserProfilesGetEventBlastByBlastListNoTemplateComponent
} from '@app/user-profiles/components/user-profiles-get-event-blast-by-blast-list/user-profiles-get-event-blast-by-blast-list.component';
import {UsersStartLoginFormComponent} from './components/users-start-login-form/users-start-login-form.component';
import {
    UsersLoginWithOtpSwiperComponent
} from './components/users-login-with-otp-swiper/users-login-with-otp-swiper.component';
import {
    UsersVerifyUserAccountVerificationLoginFormComponent
} from './components/users-verify-user-account-verification-login-form/users-verify-user-account-verification-login-form.component';
import {
    UsersForgotPasswordSliderComponent
} from './components/users-forgot-password-slider/users-forgot-password-slider.component';
import {
    UsersLoginWithFacebookComponent
} from './components/users-login-with-facebook/users-login-with-facebook.component';
import {GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
import {
    UsersGetAllUserContactsComponent
} from './components/users-get-all-user-contacts/users-get-all-user-contacts.component';
import {
    UsersSignInUserFromGoogleComponent, UsersSignInUserFromGoogleNoTemplateComponent
} from './components/users-sign-in-user-from-google/users-sign-in-user-from-google.component';


@NgModule({
    declarations: [
        UsersSignInFormComponent,
        UsersSignUpFormComponent,
        UsersSignOutComponent,
        UsersSignOutNoTemplateComponent,
        UsersUpdateUserAccountFormComponent,
        UsersVerifyUserAccountFormComponent,
        UsersUserSignUpSliderComponent,
        UserProfilesStartEventBlastNoTemplateComponent,
        UserProfilesAddEventBlastRecipientNoTemplateComponent,
        UserProfilesGetEventBlastByBlastListNoTemplateComponent,
        UsersStartLoginFormComponent,
        UsersLoginWithOtpSwiperComponent,
        UsersVerifyUserAccountVerificationLoginFormComponent,
        UsersForgotPasswordSliderComponent,
        UsersLoginWithFacebookComponent,
        UsersGetAllUserContactsComponent,
        UsersSignInUserFromGoogleComponent,
        UsersSignInUserFromGoogleNoTemplateComponent
    ],
    imports: [
        CoreModule,
        GoogleSigninButtonModule
    ],
    exports: [
        UsersSignInFormComponent,
        UsersSignUpFormComponent,
        UsersSignOutNoTemplateComponent,
        UsersUpdateUserAccountFormComponent,
        UsersSignOutComponent,
        UsersVerifyUserAccountFormComponent,
        UsersUserSignUpSliderComponent,
        UserProfilesGetEventBlastByBlastListNoTemplateComponent,
        UserProfilesAddEventBlastRecipientNoTemplateComponent,
        UsersStartLoginFormComponent,
        UsersLoginWithOtpSwiperComponent,
        UsersForgotPasswordSliderComponent,
    ],
    // entryComponents: []
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UsersModule {
}
