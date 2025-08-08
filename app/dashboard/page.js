"use client";
import { Button } from "@/app/components/ui/button";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { auth, db } from "../lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

function Dashboard() {
  const router = useRouter();
  const handleSignout = () => {
    // signOut()
    localStorage.clear();
    router.push("/login");
  };
  onAuthStateChanged(auth, async () => {
    const local = localStorage.getItem("User");
    if (local) {
      const docRef = doc(db, "teachers", local);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        document.getElementById("email").innerText = userData.email;
        document.getElementById("fname").innerText = userData.fname;
      }
    }
  });
  return (
    <div className="flex justify-center items-center h-96">
      <h1 id="email"></h1>
      <h1 id="fname"></h1>
      Dashboard
      <Button onClick={handleSignout}>SignOut</Button>
    </div>
  );
}

export default Dashboard;
