"use client";
import { auth } from "@/app/lib/firebase/config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => Unsubscribe();
  }, []);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
  };
  const logOut = () => {
    return signOut(auth)
  };
  return (
    <AuthProvider.Provider value={{ user, signIn, logOut }}>
      {children}
    </AuthProvider.Provider>
  );
}
export default AuthProvider;
 
export function useAuth() {
  return useContext(AuthContext);
}
