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
  // authDomain: "netflixgpt-3e156.firebaseapp.com",
  // projectId: "netflixgpt-3e156",
  // storageBucket: "netflixgpt-3e156.appspot.com",
  // messagingSenderId: "822278216092",
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: "G-550HYJYQ31",
  apiKey: "AIzaSyArTOxt7oAxXlKu2lHign_O6GJFw38hcPQ",
  authDomain: "-3netflixgpte156.firebaseapp.com",
  projectId: "netflixgpt-3e156",
  storageBucket: "netflixgpt-3e156.appspot.com",
  messagingSenderId: "822278216092",
  appId: "1:822278216092:web:9dde1e1b337ccfa0621059",
  measurementId: "G-550HYJYQ31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
