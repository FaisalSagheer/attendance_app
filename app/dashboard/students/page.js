"use client";
import React, { useEffect, useState } from "react";
import AddStudent from "./_components/AddStudent";
import StudentListTable from "./_components/StudentListTable";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase/config";

function Students() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    getAllStudent();
  }, []);

  const getAllStudent = async () => {
    const data = await getDocs(collection(db, "students"));
    setStudentList(data.docs.map(doc => ({ id: doc.id, ...doc.data()})));
  };
  
  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddStudent />
      </h2>
      <StudentListTable studentList={studentList} />
    </div>
  );
}

export default Students;
