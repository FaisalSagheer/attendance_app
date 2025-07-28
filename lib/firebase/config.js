// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, getDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEDU9RKbPT4OYZyAWKLBhBGUkcKR06SOk",
  authDomain: "attendance-app-67f82.firebaseapp.com",
  projectId: "attendance-app-67f82",
  storageBucket: "attendance-app-67f82.firebasestorage.app",
  messagingSenderId: "331268006075",
  appId: "1:331268006075:web:a07271491151824fb6499e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();


