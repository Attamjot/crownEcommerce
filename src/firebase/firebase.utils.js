import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCBhsrpDYzUvnPBcDxVktJ7GltROCzM5Fw",
    authDomain: "crwn-db-531a1.firebaseapp.com",
    databaseURL: "https://crwn-db-531a1.firebaseio.com",
    projectId: "crwn-db-531a1",
    storageBucket: "crwn-db-531a1.appspot.com",
    messagingSenderId: "849329959879",
    appId: "1:849329959879:web:b7fae11b9e15f697b71fe2",
    measurementId: "G-4Q0JX3Z4PH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
