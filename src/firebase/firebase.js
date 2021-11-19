import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAW3CBggzjxwChnadrm0oEMT5XI_CcsTvk",
    authDomain: "naturaldiet-179b6.firebaseapp.com",
    projectId: "naturaldiet-179b6",
    storageBucket: "naturaldiet-179b6.appspot.com",
    messagingSenderId: "608430221260",
    appId: "1:608430221260:web:784660a6c86dad3ce05f69",
    measurementId: "G-CY0EJ05DCM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();