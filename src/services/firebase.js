// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Y8tHK9ZQXMdPqm4r04NlvX8kK6CvCl8",
  authDomain: "jazzy-systems.firebaseapp.com",
  projectId: "jazzy-systems",
  storageBucket: "jazzy-systems.appspot.com",
  messagingSenderId: "570439178801",
  appId: "1:570439178801:web:0d042e2d554e2edb191310",
  measurementId: "G-G4Q9Z407S0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
