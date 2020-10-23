// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_products: 'http://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: "AIzaSyAt0W8ehnIo9uuvGGqJjTUwy1nBg_388hU",
    authDomain: "cursoplatzy-5a04f.firebaseapp.com",
    databaseURL: "https://cursoplatzy-5a04f.firebaseio.com",
    projectId: "cursoplatzy-5a04f",
    storageBucket: "cursoplatzy-5a04f.appspot.com",
    messagingSenderId: "922221871947",
    appId: "1:922221871947:web:5b1e0144fcdb3b26549ece"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
