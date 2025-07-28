"use server";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app, auth } from "./config";
export async function createUser(prevState, formData) {
  const db = getFirestore();
  const fname = formData.get("fname");
  const email = formData.get("email");
  const password = formData.get("password");
  createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
    const user = userCredential.user
    const userData = {
      FullName: fname,
      Email: email,
      Password: password,
      uid: user.uid,
    };
    try {
      const docRef = doc(db, "teachers",user.uid);
      setDoc(docRef, userData).then(() => {
        window.location.href = "/dashboard"
      });
    } catch (error) {
      console.log(error);
    }
  })
}
