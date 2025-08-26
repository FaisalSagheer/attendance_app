"use client";
import React, { useEffect, useState } from "react";
import AddStudent from "./_components/AddStudent";
import StudentListTable from "./_components/StudentListTable";
import { toast } from "react-toastify";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase/config";

function Students() {
  const [studentList, setStudentList] = useState([]);
  // const GetAllStudents = ()=>{}
  const FetchData = async () => {
    const StudentRef = collection(db, "students");
    try {
      const docSnap = await getDocs(StudentRef);
      if (docSnap) {

        // console.log(docSnap)
        docSnap.forEach(docs => {
          // const StudentData = docs.data();
          // console.log(StudentData);
          setStudentList(docs.data())
        });
      }
    } catch (error) {
      // toast.error("Error Fetching Data")
      console.log(error);
    }
  };
  FetchData();
  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddStudent />
      </h2>
      <StudentListTable studentList={studentList}/>
    </div>
  );
}

export default Students;
