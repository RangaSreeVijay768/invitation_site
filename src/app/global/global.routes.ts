import {Routes} from '@angular/router';
import {AuthGuard} from "@core/auth.guard";

export const ROUTES: Routes = [
    // {path: 'signedin', component: SignedinLandingPageComponent, children: SIGNEDIN_ROUTES},
    // {path: 'basic', component: LandingComponent, children: BASIC_ROUTES},
    {path: 'basic', loadChildren: () => import('@basic/basic.module').then(m => m.BasicModule)},
    {
        path: 'signedin',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () => import('@signedin/signedin.module').then(m => m.SignedinModule)
    },

    {path: '', redirectTo: '/basic/landingpage', pathMatch: 'full'},
    {path: '**', redirectTo: '/basic/landingpage'},
];

