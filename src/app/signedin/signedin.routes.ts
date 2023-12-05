import {Routes} from '@angular/router';
import {SignedinLandingPageComponent} from "@signedin/pages/signedin-landing-page/signedin-landing-page.component";

export const SIGNEDIN_ROUTES: Routes = [

    {
        path: '', component: SignedinLandingPageComponent, children: [
            {
                path: 'userprofiles',
                loadChildren: () => import('@user-profiles/user-profiles.module').then(m => m.UserProfilesModule)
            },
            {path: 'events', loadChildren: () => import('@events/events.module').then(m => m.EventsModule)},
            {path: '', redirectTo: 'events', pathMatch: 'full'},
        ]
    }

];

