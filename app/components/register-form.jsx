"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import { doc, getFirestore, setDoc } from "firebase/firestore";

function RegisterForm({ className, ...props }) {
  const db = getFirestore()
  const [userData, setUserData] = useState({ fname:"", email:"",password:"" });
  const router = useRouter();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const createUser = async (e) => {
    e.preventDefault();
    const res = await createUserWithEmailAndPassword(userData.email,userData.password)
    const user = res.user
    try {  
      const docRef = doc(db,"teachers",user.uid)
      setDoc(docRef,userData)
      router.push("/login");
      console.log( userData );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Register your account</CardTitle>
          <CardDescription>
            Enter your email below to register your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="fname">Full Name</Label>
                <Input
                  id="fname"
                  name="fname"
                  type="text"
                  value={userData.fname}
                  onChange={(e) => setUserData({...userData,fname:e.target.value})}
                  placeholder="Jhon..."
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData,email:e.target.value})}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={(e) => setUserData({...userData,password:e.target.value})}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" onClick={createUser} className="w-full">
                  Register
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Sign In
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default RegisterForm;
