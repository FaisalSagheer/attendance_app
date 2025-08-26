"use client";
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
export default function StudentListTable({ studentList }) {
  ModuleRegistry.registerModules([AllCommunityModule]);
  const [colDefs, setColDef] = useState([
    // { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "address"},
    { field: "contact"},
    { field: "grade", filter: true },
  ]);
  const [rowData, setRowData] = useState();
  useEffect(() => {
    studentList && setRowData(studentList);
  }, [studentList]);
  return (
    <div style={{ height: 500 }} className="mt-10">
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}
