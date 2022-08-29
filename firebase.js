import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtnzEdLyKkz69ZdC9kVMauaSqZO54-wIg",
  authDomain: "signal-clone-939ac.firebaseapp.com",
  projectId: "signal-clone-939ac",
  storageBucket: "signal-clone-939ac.appspot.com",
  messagingSenderId: "80435139033",
  appId: "1:80435139033:web:3afb81ac0d1b612ad409c8"
};

let app; //initalize variable

if (firebase.apps.length === 0) { //if firebase app is already initalized, shouldn't keep reinitalizing it
  app = firebase.initalizeApp(firebaseConfig);
} else {
  app = firebase.app;
}

const db = app.firestore(); //databass access variable
const auth = firebase.auth() //auth access variable

export { db, auth }; 