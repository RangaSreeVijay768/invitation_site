import {Routes} from '@angular/router';
import {
    UserProfilesUserProfilePageComponent
} from '@app/user-profiles/pages/user-profiles-user-profile-page/user-profiles-user-profile-page.component';
import {
    UserProfilesProfileEditComponent
} from '@app/user-profiles/pages/user-profiles-profile-edit/user-profiles-profile-edit.component';
import {
    UserProfilesPayoutInformationComponent
} from '@app/user-profiles/pages/user-profiles-payout-information/user-profiles-payout-information.component';
import {
    UserProfilesProfilePastGuestsComponent
} from '@app/user-profiles/pages/user-profiles-profile-past-guests/user-profiles-profile-past-guests.component';
import {
    UserProfilesBlastsDefaultPageComponent
} from '@app/user-profiles/pages/user-profiles-blasts-default-page/user-profiles-blasts-default-page.component';
import {
    UserProfilesBlastsMainPageComponent
} from '@app/user-profiles/pages/user-profiles-blasts-main-page/user-profiles-blasts-main-page.component';
import {
    UserProfilesBlastDetailsPageComponent
} from '@app/user-profiles/pages/user-profiles-blast-details-page/user-profiles-blast-details-page.component';
import {GetBlastListResolver} from '@app/blasts/blasts.resolvers';
import {
    UserProfilesBlastDetailsContactsPageComponent
} from '@app/user-profiles/pages/user-profiles-blast-details-contacts-page/user-profiles-blast-details-contacts-page.component';
import {
    UserProfilesBlastDetailsBlastsPageComponent
} from '@app/user-profiles/pages/user-profiles-blast-details-blasts-page/user-profiles-blast-details-blasts-page.component';
import {
    UserProfilesPurchaseHistoryPageComponent
} from '@app/user-profiles/pages/user-profiles-purchase-history-page/user-profiles-purchase-history-page.component';
import {GetUserAccountResolver} from '@app/user-profiles/user-profiles.resolvers';
import {
    UserProfilesMainPageComponent
} from "@user-profiles/pages/user-profiles-main-page/user-profiles-main-page.component";
import {
  UserProfilesProfileAllContactsComponent
} from '@user-profiles/pages/user-profiles-profile-all-contacts/user-profiles-profile-all-contacts.component';

export const USER_PROFILES_ROUTES: Routes = [
        {
            path: '', component: UserProfilesMainPageComponent, children: [
                {path: 'edit', component: UserProfilesProfileEditComponent, resolve: {userAccount: GetUserAccountResolver}},
                {path: 'main', component: UserProfilesUserProfilePageComponent},
                {path: 'history', component: UserProfilesPurchaseHistoryPageComponent},
                {path: 'allcontacts', component: UserProfilesProfileAllContactsComponent},
                {path: 'payoutinfo', component: UserProfilesPayoutInformationComponent},
                {path: 'pastguests', component: UserProfilesProfilePastGuestsComponent},
                {
                    path: 'blasts', component: UserProfilesBlastsMainPageComponent,
                    children: [
                        {path: 'default', component: UserProfilesBlastsDefaultPageComponent},
                        {
                            path: ':blastId', component: UserProfilesBlastDetailsPageComponent,
                            resolve: {blastList: GetBlastListResolver}, children: [
                                {path: 'contacts', component: UserProfilesBlastDetailsContactsPageComponent},
                                {path: 'blasts', component: UserProfilesBlastDetailsBlastsPageComponent},
                            ]
                        },
                        {path: '', redirectTo: 'default', pathMatch: 'full'},
                    ],

                },
                {path: '', redirectTo: 'edit', pathMatch: 'full'},
            ]
        },


    ]
;

