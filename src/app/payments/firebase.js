// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlLWD-ifPY8So3R2JIQEB_PjRiTUKn7no",
  authDomain: "eunseo-seol-6334e.firebaseapp.com",
  projectId: "eunseo-seol-6334e",
  storageBucket: "eunseo-seol-6334e.appspot.com",
  messagingSenderId: "1042386782911",
  appId: "1:1042386782911:web:7c833a17dc9f505dd3140a",
  measurementId: "G-5RN0P4M3JE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
