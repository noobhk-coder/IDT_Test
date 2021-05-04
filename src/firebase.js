import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    // apiKey: "AIzaSyBXXCsOs8ES8QBHEZicL26dnijD4oNvRBg",
    // authDomain: "recipe-8a264.firebaseapp.com",
    // projectId: "recipe-8a264",
    // storageBucket: "recipe-8a264.appspot.com",
    // messagingSenderId: "381876836011",
    // appId: "1:381876836011:web:11e1e689a9a44a257949ee"

    apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
};


firebase.initializeApp(firebaseConfig);

export default firebase;