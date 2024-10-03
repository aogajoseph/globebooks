// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3v4PV9aH8lcAaKk1_cBI08sMjxw2QM1w",
  authDomain: "globebooks-cf17f.firebaseapp.com",
  projectId: "globebooks-cf17f",
  storageBucket: "globebooks-cf17f.appspot.com",
  messagingSenderId: "923769919911",
  appId: "1:923769919911:web:584986d901d4d62b0abe82",
  measurementId: "G-JDEXGFHR9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);            // For Authentication
const db = getFirestore(app);         // For Firestore Database
const analytics = getAnalytics(app);  // For Firebase Analytics (optional)

export { auth, db, analytics };