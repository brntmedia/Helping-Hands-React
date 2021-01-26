/*import firebase from 'firebase'

import {db} from '../firebase';

var firebaseApp = firebase.intializeApp({
    apiKey: "AIzaSyBpgcllRD5TrxCMyEO8HpEHyT07gD_Ufnw",
    authDomain: "helping-hands-30a39.firebaseapp.com",
    projectId: "helping-hands-30a39",
    storageBucket: "helping-hands-30a39.appspot.com",
    messagingSenderId: "242568415605",
    appId: "1:242568415605:web:2329766de320a1101e6b3c",
    measurementId: "G-T1GXMNKLWP"
});

var db = firebaseApp.firestore();

export {db};*/

import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBpgcllRD5TrxCMyEO8HpEHyT07gD_Ufnw",
    authDomain: "helping-hands-30a39.firebaseapp.com",
    projectId: "helping-hands-30a39",
    storageBucket: "helping-hands-30a39.appspot.com",
    messagingSenderId: "242568415605",
    appId: "1:242568415605:web:2329766de320a1101e6b3c",
    measurementId: "G-T1GXMNKLWP"
});

var db = firebaseApp.firestore();

export { db };