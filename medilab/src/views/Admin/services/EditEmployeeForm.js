import React, { useState } from 'react';
import { Card } from 'shards-react';
import "./EditForm.css"

function EditEmployeeForm({ employee, onSubmit }) {
  const [editedEmployee, setEditedEmployee] = useState({
    name: employee.name,
    phone: employee.phone,
    email: employee.email,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    alert("Employee details edited successfully")
    event.preventDefault();
    onSubmit(employee.id, editedEmployee);
  };

  return (
    <Card>
    <form onSubmit={handleSubmit} className="edit-form">
      <label>
        Name:
        <input
        className="edit-input"
          type="text"
          name="name"
          value={editedEmployee.name}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <label>
        Phone:
        <input
        className="edit-input"
          type="text"
          name="phone"
          value={editedEmployee.phone}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <label>
        Email:
        <input
        className="edit-input"
          type="email"
          name="email"
          value={editedEmployee.email}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <button type="submit" className="edit-button">Save</button>
    </form>
    </Card>
  );
}

export default EditEmployeeForm;
