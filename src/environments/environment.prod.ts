export const environment = {
    production: true,
    apiUrls: {
        baseUrl: 'https://api.fueldesk.titanfuels.aero',
        filesUrl:'https://api.fueldesk.titanfuels.aero',
    },
    autoInitializeForms: false,
    stripePublicKey: 'pk_test_51Ja4hEDwqq579CoGmOCmCIafY0EsE1TvOsPjTR6YqMNBRjYapxYrWk865WIk40PineHbfSFYvooIq8zHaUSouczO00p1o7Yk9T',
    routeTracing: true,
  stripe: {
    publicKey: 'pk_test_JawTCR5mHnPCU1Uq5ZhN6yhz',
  },
    hostname: window.location.origin,
    simulateData:false,
    useHash:false
};
