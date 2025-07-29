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
// import { auth, db } from "@/lib/firebase/config";

function RegisterForm({ className, ...props }) {
  //   const initialState = {
  //   message: '',
  // }

  // const [state, formAction, pending] = useActionState(createUserDoc)
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const createUser = async (e) => {
    createUserWithEmailAndPassword(email, password);
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password, fname);
      console.log({ res });
      setFname("");
      setEmail("");
      setPassword("");
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
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
