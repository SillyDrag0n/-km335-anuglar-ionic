// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  m335GroupNumber: 1,
  // Neu hinzufügen
  firebaseConfig: {
    apiKey: "AIzaSyDJgmwqHki4FjNxduVqkoYUQIp8G0QYyOo",
    authDomain: "m335-uebungen.firebaseapp.com",
    databaseURL: "https://m335-uebungen.firebaseio.com",
    projectId: "m335-uebungen",
    storageBucket: "m335-uebungen.appspot.com",
    messagingSenderId: "675049996439",
    appId: "1:675049996439:web:9b2aed3cfc2b9fabe669d2"
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
