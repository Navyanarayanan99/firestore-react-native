
import {initializeApp} from '@firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCHXJqBpU2jVOEkhWep_av5pa9kLzHnXxc",
    authDomain: "firestore-db-294ad.firebaseapp.com",
    projectId: "firestore-db-294ad",
    storageBucket: "firestore-db-294ad.appspot.com",
    messagingSenderId: "195891447089",
    appId: "1:195891447089:android:5731a48eece8f610779c10"
};
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
