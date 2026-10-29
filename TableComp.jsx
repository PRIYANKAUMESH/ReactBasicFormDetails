import React from "react";
import { Table } from "react-bootstrap";

function TableComp({ formDetails }) {

  return (
    <div>
      <h1 className="text-center text-success">Registered Employees</h1>
      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Employee Phone number</th>
          </tr>
        </thead>
        <tbody>
          {formDetails.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.empId}</td>
                <td>{data.empName}</td>
                <td>{data.empEmail}</td>
                <td>{data.empPho}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComp;
