import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
    apiKey: "AIzaSyB4dehq3yEmpmtZuofdBGDnkabvOI14T-8",
    authDomain: "album28.firebaseapp.com",
    databaseURL: "https://album28.firebaseio.com",
    projectId: "album28",
    storageBucket: "album28.appspot.com",
    messagingSenderId: "277581437359",
    appId: "1:277581437359:web:b8b3acd4ceed575aa4b75a"
});