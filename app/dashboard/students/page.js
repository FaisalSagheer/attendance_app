"use client";
import React from "react";
import AddStudent from "./_components/AddStudent";

function Students() {
  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddStudent />
      </h2>
    </div>
  );
}

export default Students;
