// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyB9GtQpEiSPJNtCuZTypKEIzXyy046aQW0",
  authDomain: "netflix-gpt-1aef3.firebaseapp.com",
  projectId: "netflix-gpt-1aef3",
  storageBucket: "netflix-gpt-1aef3.appspot.com",
  messagingSenderId: "827999129242",
  appId: "1:827999129242:web:8a351a9c0ff826ed0b5923",
  measurementId: "G-LKEXF4KF7D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// const auth = getAuth(app);
// export {app, auth};

export const auth = getAuth();
