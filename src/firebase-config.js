// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9J3HrtD5pmREf24HG9JHV1NFJjXBxwDE",
  authDomain: "blogproject-4caa5.firebaseapp.com",
  projectId: "blogproject-4caa5",
  storageBucket: "blogproject-4caa5.appspot.com",
  messagingSenderId: "923605010189",
  appId: "1:923605010189:web:12f6881be9c6836feb9244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();
