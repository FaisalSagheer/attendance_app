"use client";
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Button } from "@/app/components/ui/button";
import { Trash } from "lucide-react";
ModuleRegistry.registerModules([AllCommunityModule]);
export default function StudentListTable({ studentList }) {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [25, 50, 100];

  const CustomButtons = (props) => {
    return (
      <Button variant="destructive">
        <Trash />
      </Button>
    );
  };
  const [colDefs, setColDef] = useState([
    { field: "id" },
    { field: "name", filter: true },
    { field: "address" },
    { field: "contact" },
    { field: "grade", filter: true },
    { field: "action", cellRenderer: CustomButtons },
  ]);
  const [rowData, setRowData] = useState();
  useEffect(() => {
    studentList && setRowData(studentList);
  }, [studentList]);
  return (
    <>
      <div style={{ height: 500 }} className="mt-10">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </>
  );
}
