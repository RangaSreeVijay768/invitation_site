import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CoreModule} from '@core/core.module';
import {BasicUsersLoginPageComponent} from './pages/basic-users-login-page/basic-users-login-page.component';
import {UsersModule} from "@users/users.module";
import {LandingComponent} from "@basic/components/landing/landing.component";
import {TopNavComponent} from "@basic/components/top-nav/top-nav.component";
import {BasicUsersSignUpPageComponent} from './pages/basic-users-sign-up-page/basic-users-sign-up-page.component';
import {BasicLandingPageComponent} from './pages/basic-landing-page/basic-landing-page.component';
import {BasicHomePageComponent} from './pages/basic-home-page/basic-home-page.component';
import {ImagesModule} from "@images/images.module";
import {EventsModule} from "@events/events.module";
import {AccordionStaticComponent} from './components/accordion-static/accordion-static.component';
import {
    BasicUsersForgotPasswordPageComponent
} from './pages/basic-users-forgot-password-page/basic-users-forgot-password-page.component';
import {BasicUsersLogoutModalComponent} from './components/basic-users-logout-modal/basic-users-logout-modal.component';
import {
    BasicUsersLogoutModalContentComponent
} from './components/basic-users-logout-modal/basic-users-logout-modal-content/basic-users-logout-modal-content.component';
import {
    BasicEventsEventDetailsPageComponent
} from './pages/basic-events-event-details-page/basic-events-event-details-page.component';
import {
    BasicEventsEventDetailsTicketTypeModalComponent
} from './components/basic-events-event-details-ticket-type-modal/basic-events-event-details-ticket-type-modal.component';
import {
    BasicEventsEventDetailsTicketTypeModalContentComponent
} from '@basic/components/basic-events-event-details-ticket-type-modal/basic-events-event-details-ticket-type-modal-content/basic-events-event-details-ticket-type-modal-content.component';
import {
    BasicUserInfoBeforeLoginForPaymentModalComponent
} from './components/basic-user-info-before-login-for-payment-modal/basic-user-info-before-login-for-payment-modal.component';
import {
    BasicUserInfoBeforeLoginForPaymentModalContentComponent
} from './components/basic-user-info-before-login-for-payment-modal/basic-user-info-before-login-for-payment-modal-content/basic-user-info-before-login-for-payment-modal-content.component';
import {
    BasicUserInfoBeforeLoginFormComponent
} from '@basic/components/basic-user-info-before-login-form/basic-user-info-before-login-form.component';
import {
    BasicVerifyUserWhenUserComesFromLinkSwiperComponent
} from './components/basic-verify-user-when-user-comes-from-link-swiper/basic-verify-user-when-user-comes-from-link-swiper.component';
import {
    BasicVerifyUserWhenUserComesFromLinkModalComponent
} from './components/basic-verify-user-when-user-comes-from-link-modal/basic-verify-user-when-user-comes-from-link-modal.component';
import {
    BasicVerifyUserWhenUserComesFromLinkModalContentComponent
} from './components/basic-verify-user-when-user-comes-from-link-modal/basic-verify-user-when-user-comes-from-link-modal-content/basic-verify-user-when-user-comes-from-link-modal-content.component';
import {
    BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent
} from './components/basic-verify-user-with-verification-code-before-login-modal/basic-verify-user-with-verification-code-before-login-modal.component';
import {
    BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent
} from './components/basic-verify-user-with-verification-code-before-login-modal/basic-verify-user-with-verification-code-before-login-modal-content/basic-verify-user-with-verification-code-before-login-modal-content.component';
import {
    BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent
} from './components/basic-verify-user-with-verification-code-before-login-form/basic-verify-user-with-verification-code-before-login-form.component';
import {RouterModule} from "@angular/router";
import {BASIC_ROUTES} from "@basic/basic.routes";
import {EventsCommonModule} from "@events/events.common.module";
import {UserProfilesModule} from '@user-profiles/user-profiles.module';
import {
    BasicSetMetaDataComponent, BasicSetMetaDataNoTemplateComponent
} from './components/basic-set-meta-data/basic-set-meta-data.component';
import {
    BasicSetEventMetaDataComponent, BasicSetEventMetaDataNoTemplateComponent
} from './components/basic-set-event-meta-data/basic-set-event-meta-data.component';


@NgModule({
    declarations: [
        LandingComponent,
        BasicUsersLoginPageComponent,
        TopNavComponent,
        BasicUsersSignUpPageComponent,
        BasicLandingPageComponent,
        BasicHomePageComponent,
        AccordionStaticComponent,
        BasicUsersForgotPasswordPageComponent,
        BasicUsersLogoutModalComponent,
        BasicUsersLogoutModalContentComponent,
        BasicEventsEventDetailsPageComponent,
        BasicEventsEventDetailsTicketTypeModalComponent,
        BasicEventsEventDetailsTicketTypeModalContentComponent,
        BasicUserInfoBeforeLoginForPaymentModalComponent,
        BasicUserInfoBeforeLoginForPaymentModalContentComponent,
        BasicUserInfoBeforeLoginFormComponent,
        BasicVerifyUserWhenUserComesFromLinkSwiperComponent,
        BasicVerifyUserWhenUserComesFromLinkModalComponent,
        BasicVerifyUserWhenUserComesFromLinkModalContentComponent,
        BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent,
        BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent,
        BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent,
        BasicSetMetaDataComponent,
        BasicSetMetaDataNoTemplateComponent,
        BasicSetEventMetaDataComponent,
        BasicSetEventMetaDataNoTemplateComponent
    ],
    imports: [
        CoreModule,
        UsersModule,
        ImagesModule,
        EventsCommonModule,
        RouterModule.forChild(BASIC_ROUTES),
        UserProfilesModule,
    ],
    exports: [
        LandingComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    // entryComponents: []
})

export class BasicModule {
}
