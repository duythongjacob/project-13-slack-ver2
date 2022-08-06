// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2BlMT1jiiatEoafrdfEkNThU29nGAdys",
  authDomain: "slack-clone-ver2.firebaseapp.com",
  projectId: "slack-clone-ver2",
  storageBucket: "slack-clone-ver2.appspot.com",
  messagingSenderId: "510448396117",
  appId: "1:510448396117:web:03924d7d570f70b02ab1dc",
  measurementId: "G-LFW7KY0CJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
export {app,db, auth, provider}