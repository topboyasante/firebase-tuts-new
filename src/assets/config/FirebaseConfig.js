import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbnZNx150_4YDtv9WuC0sTLAeGej_ir1w",
  authDomain: "fir-tuts-50833.firebaseapp.com",
  projectId: "fir-tuts-50833",
  storageBucket: "fir-tuts-50833.appspot.com",
  messagingSenderId: "982378167109",
  appId: "1:982378167109:web:4e62371ad7448a133e9c2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()