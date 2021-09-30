import * as firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8krxckEdO_MfwN1blUsIkQoDFXP-R_8M",
  authDomain: "hardware-place.firebaseapp.com",
  projectId: "hardware-place",
  storageBucket: "hardware-place.appspot.com",
  messagingSenderId: "903338512684",
  appId: "1:903338512684:web:8754c188cd533628861c89",
};

const app = firebase.initialize(firebaseConfig);
export const getFirebase = () => app;
//Servicios
export const getfireStore = () => firebase.fireStore(app);
