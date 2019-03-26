import firebase from 'firebase/app';

const config = {
    ApiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain = process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
    databaseURL = "https://" + process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseio.com",
    projectId = process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket = process.env.VUE_APP_FIREBASE_PROJECT_ID + ".appspot.com"
}


const FirebaseApp = firebase.initializeApp(config);


export default {
    FirebaseApp: FirebaseApp
}