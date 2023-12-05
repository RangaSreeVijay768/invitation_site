import {NgModule} from "@angular/core";
import {CoreModule} from "@core/core.module";
import {SignedinLandingPageComponent} from "@app/signedin/pages/signedin-landing-page/signedin-landing-page.component";
import {SignedinTopNavComponent} from "@app/signedin/components/signedin-top-nav/signedin-top-nav.component";
import {UsersModule} from '@users/users.module';
import {ImagesModule} from "@images/images.module";
import {SearchModule} from '@app/search/search.module';
import {RouterModule} from "@angular/router";
import {SIGNEDIN_ROUTES} from "@signedin/signedin.routes";
import {EventsCommonModule} from "@events/events.common.module";
import {UserProfilesCommonModule} from "@user-profiles/user-profiles.common.module";

@NgModule({
    declarations: [
        SignedinLandingPageComponent,
        SignedinTopNavComponent
    ],
    imports: [
        CoreModule,
        UsersModule,
        ImagesModule,
        EventsCommonModule,
        UserProfilesCommonModule,
        SearchModule,
        RouterModule.forChild(SIGNEDIN_ROUTES)
    ],
    exports: [
        SignedinLandingPageComponent,
        SignedinTopNavComponent
    ],
    // entryComponents: []

})

export class SignedinModule {
}
