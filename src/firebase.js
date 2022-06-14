
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "shortways-86250.firebaseapp.com",
  projectId: "shortways-86250",
  storageBucket: "shortways-86250.appspot.com",
  messagingSenderId: "737478562786",
  appId: "1:737478562786:web:c676620bea927132111fbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

//db
export const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);