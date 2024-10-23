import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-zfrNJ2pG7ArmWK8z5D0f0-h0zJdLeWw",
  authDomain: "money-map-f8f5f.firebaseapp.com",
  projectId: "money-map-f8f5f",
  storageBucket: "money-map-f8f5f.appspot.com",
  messagingSenderId: "701004290312",
  appId: "1:701004290312:web:fc71449c48d651ad5bb4bd",
  measurementId: "G-8CZEH9M3F3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };