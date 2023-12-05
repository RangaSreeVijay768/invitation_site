import {CUSTOM_ELEMENTS_SCHEMA, NgModule, Type} from '@angular/core';

import {AppComponent} from './app.component';
import {RouteReuseStrategy, RouterModule} from '@angular/router';
import {ROUTES} from '@global/global.routes';
import {environment} from '@environment/environment';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {RouterReuseStrategy} from '@core/router-reuse-strategy';
import {
    BASE_URL_HTTP_INTERCEPTORS, CommonHttpInterceptor, CoreHttpClient, InvitationApiUrlInterceptor, TokenInterceptor,
} from '@core/http/http.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {
    EventsSearchEventInfosAutoCompleteFormControlComponent
} from '@events/components/events-search-event-infos-auto-complete-form-control/events-search-event-infos-auto-complete-form-control.component';
import {CoreModule} from '@core/core.module';
import {GlobalModule} from '@global/global.module';
import {
    FORM_CONTROL_TYPE_EVENTS_SEARCH_EVENT_INFOS_AUTOCOMPLETE_INPUT
} from '@events/components/events-search-event-infos-auto-complete-form-control/events-search-event-infos-auto-complete-input.model';
import {DYNAMIC_FORM_CONTROL_MAP_FN, DynamicFormControl, DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
    GetEventInfoResolver, GetOrderCompleteInfoByOrderPaymentResolver, GetUserEventInfoResolver
} from '@events/events.resolvers';
import {GetBlastListResolver} from '@app/blasts/blasts.resolvers';
import {
    FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule
} from '@abacritt/angularx-social-login';
import {
    FORM_CONTROL_TYPE_CORE_GOOGLE_ADDRESS_AUTO_COMPLETION
} from '@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.model';
import {
    CoreGoogleAddressAutoCompletionFormControlComponent
} from '@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.component';
import {GetUserAccountResolver} from '@app/user-profiles/user-profiles.resolvers';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbDateCustomParserFormatter} from "@core/models.converters";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        AppComponent,
        // EventsSearchEventInfosAutoCompleteFormControlComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SocialLoginModule,
        SimpleNotificationsModule.forRoot({
            timeOut: 5000,
            maxStack: 3,
            showProgressBar: false,
            position: ['bottom', 'right']
        }),
        RouterModule.forRoot(ROUTES,
            {enableTracing: environment.routeTracing, useHash: environment.useHash}),
        CoreModule,
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: RouterReuseStrategy},
        InvitationApiUrlInterceptor,
        CommonHttpInterceptor,
        TokenInterceptor,
        CoreHttpClient,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CommonHttpInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },

        {
            provide: BASE_URL_HTTP_INTERCEPTORS,
            useClass: InvitationApiUrlInterceptor,
            multi: true,
        },
        GetEventInfoResolver,
        GetBlastListResolver,
        GetUserEventInfoResolver,
        GetOrderCompleteInfoByOrderPaymentResolver,
        GetUserAccountResolver,
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '562243437689-mcsr111n1c5p8v1n0265bh2d173p33sp.apps.googleusercontent.com', {
                                scopes: ['email']
                            }
                        )
                    },
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        // provider:new FacebookLoginProvider('3009346042688996'),
                        provider: new FacebookLoginProvider('3560772627502305')
                    }
                ],
                onError: (err) => {
                    console.error(err);
                }
                ,
            } as SocialAuthServiceConfig,
        },

        {
            provide: DYNAMIC_FORM_CONTROL_MAP_FN,
            useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null => {
                switch (model.type) {
                    case FORM_CONTROL_TYPE_EVENTS_SEARCH_EVENT_INFOS_AUTOCOMPLETE_INPUT:
                        return EventsSearchEventInfosAutoCompleteFormControlComponent;
                    case FORM_CONTROL_TYPE_CORE_GOOGLE_ADDRESS_AUTO_COMPLETION:
                        return CoreGoogleAddressAutoCompletionFormControlComponent;
                }
            }
        },
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }  // <-- add this

    ],

    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AppModule {
}
