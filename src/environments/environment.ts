// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrls: {
        baseUrl: 'http://invitations-dev-env.eba-52zzhdmc.us-west-1.elasticbeanstalk.com/',
        filesUrl: 'https://api.dev.eventreply.com/files/secured'
    },
    autoInitializeForms: true,
    stripePublicKey: 'pk_test_51Ja4hEDwqq579CoGmOCmCIafY0EsE1TvOsPjTR6YqMNBRjYapxYrWk865WIk40PineHbfSFYvooIq8zHaUSouczO00p1o7Yk9T',
    routeTracing: false,
    hostname: window.location.origin,
    simulateData: true,
    useHash: false,
    stripe: {
        publicKey: 'pk_test_JawTCR5mHnPCU1Uq5ZhN6yhz',
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
