import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7QdBgZbmI9rWMklfpufzXJ6eRH_eWJfE",

    authDomain: "info1998-final-d114d.firebaseapp.com",

    projectId: "info1998-final-d114d",

    storageBucket: "info1998-final-d114d.appspot.com",

    messagingSenderId: "289858023109",

    appId: "1:289858023109:web:192c1ce88d7e86d6138aac"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const auth = getAuth(app);
const db = getFirestore(app);

const providers = {
    googleProvider: new GoogleAuthProvider(),
};

const createComponentWithAuth = withFirebaseAuth({
    providers,
    firebaseAppAuth: auth,
});

const signInWithGoogle = () => {
    signInWithPopup(auth, providers.googleProvider);
};

const signOutFirebase = () => {
    signOut(auth);
};

export {
    db,
    auth,
    createComponentWithAuth,
    signInWithGoogle,
    signOutFirebase as signOut,
};