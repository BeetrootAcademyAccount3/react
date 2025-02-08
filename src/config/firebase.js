import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnsQJsGikREjWDKfwGwATmgtCO3G7c1XE",
  authDomain: "dog-shelter-40c5b.firebaseapp.com",
  projectId: "dog-shelter-40c5b",
  storageBucket: "dog-shelter-40c5b.firebasestorage.app",
  messagingSenderId: "479828536400",
  appId: "1:479828536400:web:a9ac7fa7de22b00c4cf555",
  measurementId: "G-M3KRZ9MT3J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
