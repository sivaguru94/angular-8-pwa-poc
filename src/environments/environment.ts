// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCC-gK06qHIyzO7wHOGtSPRMWoYDI3HekU",
    authDomain: "wpa-first-7c87c.firebaseapp.com",
    databaseURL: "https://wpa-first-7c87c.firebaseio.com",
    projectId: "wpa-first-7c87c",
    storageBucket: "",
    messagingSenderId: "588262920055",
    appId: "1:588262920055:web:4ffdf52722df50a7"
  },
  serviceWorkerScript: 'sw-sync.js'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
