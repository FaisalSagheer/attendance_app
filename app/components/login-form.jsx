"use client";
import { cn } from "@/app/lib/utils";
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
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "@/app/lib/firebase/config";
import Invalid from "../(auth)/login/error";

export function LoginForm({ className, ...props }) {
  const [userData,setUserData]=useState({email:"",password:""})
  const router = useRouter();
  const [SignInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await SignInWithEmailAndPassword(userData.email, userData.password);
      userData
      router.push("/dashboard");
    } catch (error) {
      const errorCode = error.code
      if(errorCode === "auth/invalid-credentials"){
        console.log(errorCode) 
      }
      else{
        console.log("user doesnot exist")
      }
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData,email:e.target.value})}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={userData.password}
                  onChange={(e) => setUserData({...userData,password:e.target.value})}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" onClick={signIn}>
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/register" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
