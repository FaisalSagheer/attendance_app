"use client";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { db } from "@/app/lib/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { LoaderCircle, Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

function AddStudent() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // const [Id, setId] = useState(0)
  const onSubmit = async (data) => {
    setLoading(true);
    // setId(Id + 1)
    const student = `student_${Date.now()}`;
    try {
      const ref = doc(db, "students", student);
      await setDoc(ref, data);
      setLoading(false);
      toast("Student Added");
      reset();
    } catch (error) {
      toast("error");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus />
            Add Student
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 pb-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">FullName :</Label>
                <Input {...register("name", { required: true })} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="address">Address :</Label>
                <Input {...register("address", { required: true })} />
              </div>
              <div className="grid gap-3">
                <Label>Contact :</Label>
                <Input {...register("contact", { required: true })} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="select">Select Grade : </Label>
                <select
                  className="p-3 border rounded-lg"
                  {...register("grade", { required: true })}
                >
                  <option value={"5th"}>5th</option>
                  <option value={"6th"}>6th</option>
                  <option value={"7th"}>7th</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit" disable={loading}>
                  {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
                </Button>
              </DialogClose>
            </DialogFooter>
            {/* <Input {...register('example',{required:true})}/> */}
            {/* {errors.example && <span>This field is required</span>} */}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddStudent;
