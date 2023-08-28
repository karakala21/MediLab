import React, { useState } from 'react';
import { Card } from 'shards-react';
import "./EditForm.css"

function EditTestForm({ test, onSubmit }) {
  const [editedTest, setEditedTest] = useState({
    title: test.title,
    desc: test.desc,
    price: test.price,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTest((prevTest) => ({
      ...prevTest,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(test.id, editedTest);
  };

  return (
    <Card>
    <form onSubmit={handleSubmit} className="edit-form">
      <label>
        Title:
        <input
        className="edit-input"
          type="text"
          name="title"
          value={editedTest.title}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <label>
        Description:
        <textarea
         className='edit-input'
         rows={5}
         cols={75}
          name="desc"
          value={editedTest.desc}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <label>
        Price:
        <input
        className="edit-input"
          type="number"
          name="price"
          value={editedTest.price}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <button type="submit" className="edit-button">Save</button>
    </form>
    </Card>
  );
}

export default EditTestForm;
