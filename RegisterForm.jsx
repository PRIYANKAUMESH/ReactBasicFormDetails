import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function RegisterForm({ formData }) {
  const [formDetails, setFormDetails] = useState({
    empId: "",
    empName: "",
    empEmail: "",
    empPho: "",
  });

  const [validationMessage, setValidationMessage] = useState({});

  const validate = () => {
    let errors = {};
    if (!formDetails.empId) {
      errors.empId = "Employee Id is required";
    } else if (!/^DT\d{6}$/.test(formDetails.empId)) {
      errors.empId = "Employee Id is Invalid";
    }
    return errors;
  };

  const handleSubmit = () => {
    let errorMsgs = validate();
    if (Object.keys(errorMsgs).length > 0) {
      setValidationMessage(errorMsgs);
    } else {
      setValidationMessage({});
      formData(formDetails);
      setFormDetails({
        empId: "",
        empName: "",
        empEmail: "",
        empPho: "",
      });
    }
  };

  const handleChange = (event) => {
    setFormDetails({
      ...formDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1 className="text-center text-info">Register Form</h1>
      <Form className="container border rounded p-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="empId"
            value={formDetails.empId}
            onChange={handleChange}
          />
          {validationMessage.empId && (
            <p className="text-danger">{validationMessage.empId}</p>
          )}.........
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="empName"
            value={formDetails.empName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Employee Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={formDetails.empEmail}
            onChange={handleChange}
            name="empEmail"
          />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Employee Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={formDetails.empPho}
            onChange={handleChange}
            name="empPho"
          />
        </Form.Group>

        <Button onClick={handleSubmit}>Submit😊</Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
