
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEDU9RKbPT4OYZyAWKLBhBGUkcKR06SOk",
  authDomain: "attendance-app-67f82.firebaseapp.com",
  projectId: "attendance-app-67f82",
  storageBucket: "attendance-app-67f82.firebasestorage.app",
  messagingSenderId: "331268006075",
  appId: "1:331268006075:web:a07271491151824fb6499e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)