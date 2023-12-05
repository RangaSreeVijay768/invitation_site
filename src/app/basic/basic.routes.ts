import {Routes} from '@angular/router';
import {BasicUsersLoginPageComponent} from '@basic/pages/basic-users-login-page/basic-users-login-page.component';
import {BasicUsersSignUpPageComponent} from '@basic/pages/basic-users-sign-up-page/basic-users-sign-up-page.component';
import {BasicLandingPageComponent} from '@basic/pages/basic-landing-page/basic-landing-page.component';
import {BasicHomePageComponent} from '@basic/pages/basic-home-page/basic-home-page.component';
import {
    BasicUsersForgotPasswordPageComponent
} from '@basic/pages/basic-users-forgot-password-page/basic-users-forgot-password-page.component';
import {
    BasicEventsEventDetailsPageComponent
} from '@basic/pages/basic-events-event-details-page/basic-events-event-details-page.component';
import {GetEventInfoResolver} from '@events/events.resolvers';
import {LandingComponent} from '@basic/components/landing/landing.component';

export const BASIC_ROUTES: Routes = [
    {
        path: '', component: LandingComponent, children: [
            {path: 'login', component: BasicUsersLoginPageComponent},
            {path: 'signup', component: BasicUsersSignUpPageComponent},
            {path: 'forgotpassword', component: BasicUsersForgotPasswordPageComponent},
            {path: 'landingpage', component: BasicLandingPageComponent},
            {
                path: 'event/:eventId',
                component: BasicEventsEventDetailsPageComponent,
                resolve: {eventInfo: GetEventInfoResolver}
            },
            {path: 'home', component: BasicHomePageComponent},
            {path: '', redirectTo: 'login', pathMatch: 'full'},
        ]
    }

];
