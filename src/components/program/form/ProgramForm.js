import cuid from "cuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { createProgram, updateProgram, deleteProgram } from "../programActions";

const ProgramForm = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedProgram = useSelector((state) =>
    state.program.programs.find((p) => p.id === match.params.id)
  );
  const initialValues = selectedProgram ?? {
    title: "",
    category: "",
    city: "",
    description: "",
    host: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
    selectedProgram
      ? dispatch(updateProgram({ ...selectedProgram, ...values }))
      : dispatch(
          createProgram({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            mentees: [],
            hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
          })
        );

    history.push("/programs");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  return (
    <Segment>
      <Header
        content={selectedProgram ? "Edit program" : " Create new program"}
      />
      <Form onSubmit={handleFormSubmit}>
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
            placeholder="Description"
            name="description"
            value={values.description}
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
        {selectedProgram ? (
          <Button
            onClick={() => dispatch(deleteProgram(selectedProgram.id))}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
        ) : null}
        <Button positive type="submit" content="Submit" />
        <Button as={Link} to="/programs" type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default ProgramForm;
