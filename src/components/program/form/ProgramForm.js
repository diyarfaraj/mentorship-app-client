import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const ProgramForm = ({ setFormOpen, setPrograms, createProgram }) => {
  const initialValues = {
    title: "",
    category: "",
    city: "",
    host: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
    createProgram({
      ...values,
      id: cuid(),
      hostedBy: "Bob",
      mentees: [],
      hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    });
    setFormOpen(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  return (
    <Segment>
      <Form onSubmit={handleFormSubmit}>
        <h3>Create a new Mentorship Program</h3>
        <Form.Field>
          <input
            placeholder="Program Title"
            name="title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>

        <Form.Field>
          <input
            placeholder="City"
            name="city"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Category"
            name="category"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Host"
            name="host"
            value={values.host}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>

        <Button positive type="submit" content="Submit" />
        <Button onClick={() => setFormOpen(false)} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default ProgramForm;
