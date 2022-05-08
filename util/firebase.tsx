import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD7QdBgZbmI9rWMklfpufzXJ6eRH_eWJfE",

    authDomain: "info1998-final-d114d.firebaseapp.com",

    projectId: "info1998-final-d114d",

    storageBucket: "info1998-final-d114d.appspot.com",

    messagingSenderId: "289858023109",

    appId: "1:289858023109:web:192c1ce88d7e86d6138aac"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
