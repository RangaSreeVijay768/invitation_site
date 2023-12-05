import {NgModule} from "@angular/core";
import {CoreModule} from "@core/core.module";
import {ImagesModule} from "@images/images.module";
import {
    UserProfilesUserUpcomingEventsModalComponent
} from "@app/user-profiles/components/user-profiles-user-upcoming-events-modal/user-profiles-user-upcoming-events-modal.component";
import {
    UserProfilesUserAttendedEventsModalComponent
} from "@app/user-profiles/components/user-profiles-user-attended-events-modal/user-profiles-user-attended-events-modal.component";
import {
    UserProfilesUserUpcomingEventsModalContentComponent
} from "@app/user-profiles/components/user-profiles-user-upcoming-events-modal/user-profiles-user-upcoming-events-modal-content/user-profiles-user-upcoming-events-modal-content.component";
import {
    UserProfilesUserAttendedEventsModalContentComponent
} from "@app/user-profiles/components/user-profiles-user-attended-events-modal/user-profiles-user-attended-events-modal-content/user-profiles-user-attended-events-modal-content.component";
import {
    UserProfilesUsersLogoutModalComponent
} from "@user-profiles/components/user-profiles-users-logout-modal/user-profiles-users-logout-modal.component";
import {
    UserProfilesUsersLogoutModalContentComponent
} from "@user-profiles/components/user-profiles-users-logout-modal/user-profiles-users-logout-modal-content/user-profiles-users-logout-modal-content.component";
import {UsersModule} from "@users/users.module";

@NgModule({
    declarations: [
        UserProfilesUserUpcomingEventsModalComponent,
        UserProfilesUserUpcomingEventsModalContentComponent,
        UserProfilesUserAttendedEventsModalComponent,
        UserProfilesUserAttendedEventsModalContentComponent,
        UserProfilesUsersLogoutModalComponent,
        UserProfilesUsersLogoutModalContentComponent
    ],
    imports: [
        CoreModule,
        ImagesModule,
        UsersModule
    ],
    exports: [
        UserProfilesUserUpcomingEventsModalComponent,
        UserProfilesUserUpcomingEventsModalContentComponent,
        UserProfilesUserAttendedEventsModalComponent,
        UserProfilesUserAttendedEventsModalContentComponent,
        UserProfilesUsersLogoutModalComponent,
        UserProfilesUsersLogoutModalContentComponent
    ],
    providers: []
})
export class UserProfilesCommonModule {
}
