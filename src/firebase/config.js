// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAN5uoeneKOTucNJ6T_3IorXnveheblkk",
  authDomain: "rj-49910-7e20b.firebaseapp.com",
  projectId: "rj-49910-7e20b",
  storageBucket: "rj-49910-7e20b.appspot.com",
  messagingSenderId: "35821297259",
  appId: "1:35821297259:web:225bdc979c46d15c8edb2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)