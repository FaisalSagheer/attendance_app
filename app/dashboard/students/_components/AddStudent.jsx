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
import { Plus } from "lucide-react";

function AddStudent() {
  return (
    <Dialog>
      <form>
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
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">FullName :</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Address :</Label>
              <Input
                id="username-1"
                name="e.g : 525 N tyron Street, NC"
                defaultValue="@peduarte"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="contact">Contact :</Label>
              <Input id="contact" name="contact" defaultValue="8794756395" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="select">Select Grade : </Label>
              <select className="p-3 border rounded-lg">
                <option value={"5th"}>5th</option>
                <option value={"6th"}>6th</option>
                <option value={"7th"}>7th</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AddStudent;
