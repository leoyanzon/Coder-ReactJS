import React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCodhcuGBS8D9F-PXdREdcwIOLDDdtikvA",
    authDomain: "react-js-5cf80.firebaseapp.com",
    projectId: "react-js-5cf80",
    storageBucket: "react-js-5cf80.appspot.com",
    messagingSenderId: "1025518558933",
    appId: "1:1025518558933:web:7fd6ffa842c929ca9f4c5c"
};
      


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;