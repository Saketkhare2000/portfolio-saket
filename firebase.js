// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1Hr8zdEhLEPaiEkwCbpRLZTdKP1mCJ7s",
  authDomain: "saket-khare.firebaseapp.com",
  projectId: "saket-khare",
  storageBucket: "saket-khare.appspot.com",
  messagingSenderId: "921607860464",
  appId: "1:921607860464:web:62bf08b97a866f30025235",
  measurementId: "G-KV98PRSX0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
