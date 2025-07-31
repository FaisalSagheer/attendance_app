'use client'
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { Children, createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => Unsubscribe();
  }, []);

  const signIn = () =>{
    // const provider = new GoogleAuthProvider();
    // return signInWithPopup(auth,provider)
    
  }
  const logOut = ()=>{
    return signOut(auth)
  }
  return (<>
  <AuthProvider.Provider value={{user,signIn,logOut}}>
      {Children}
  </AuthProvider.Provider>
  </>);
}
export function useAuth(){
  return useContext(AuthContext)
}
