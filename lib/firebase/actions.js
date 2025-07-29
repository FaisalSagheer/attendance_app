"use client";

import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./config";

export async function createUser() {
  // createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
  //   const user = userCredential.user
  //   const userData = {
  //     FullName: fname,
  //     Email: email,
  //     Password: password,
  //     uid: user.uid,
  //   };
  //   try {
  //     const docRef = doc(db, "teachers",user.uid);
  //     setDoc(docRef, userData).then(() => {
  //       window.location.href = "/dashboard"
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })

}
