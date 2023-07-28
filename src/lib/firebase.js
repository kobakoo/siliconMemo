// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithRedirect } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxD2VQk6SYhrCxlyETOKT-xx9s6f9r-5c",
  authDomain: "silliconmemo.firebaseapp.com",
  projectId: "silliconmemo",
  storageBucket: "silliconmemo.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();
// const github_provider = new GithubAuthProvider();
const ms_provider = new OAuthProvider("microsoft.com");

export { db, auth, provider, ms_provider };
