import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

const dataB = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser



export default {
    dataB,
    auth,
    currentUser,
}