// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Firbase Verbindungsparameter hinzufügen
  firebaseConfig: {
    apiKey: "AIzaSyArTTnqykFNgwBRL8IldPCFn8dobVVghBI",
    authDomain: "m335-login.firebaseapp.com",
    databaseURL: "https://m335-login.firebaseio.com",
    projectId: "m335-login",
    storageBucket: "m335-login.appspot.com",
    messagingSenderId: "14955115856",
    appId: "1:14955115856:web:d53930b7c82b6d01106855"
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
