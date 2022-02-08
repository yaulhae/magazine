import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyBOl4sFvrgX9nkr_FlytGx4dQaCH1ipxJY",
  authDomain: "magazine-project-b5002.firebaseapp.com",
  projectId: "magazine-project-b5002",
  storageBucket: "magazine-project-b5002.appspot.com",
  messagingSenderId: "785579461377",
  appId: "1:785579461377:web:deaf3cdb1ac4f625e9e900",
};

const apiKey = firebaseConfig.apiKey;
const firebaseApp = firebase.initializeApp(firebaseConfig);

const authApp = firebaseApp.auth();
const firestore = firebaseApp.firestore();
const storage = firebase.storage();
const realtime = firebase.database();
export { authApp, apiKey, firestore, storage, realtime };
