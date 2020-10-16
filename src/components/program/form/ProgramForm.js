import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const ProgramForm = ({ setFormOpen }) => {
  return (
    <Segment>
      <Form>
        <h3>Create a new Program</h3>
        <Form.Field>
          <input placeholder="Program Title  " />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Program Date" />
        </Form.Field>
        <Form.Field>
          <input placeholder="City Program is taking place" />
        </Form.Field>
        <Form.Field>
          <input placeholder="Enter the Subject of the Program" />
        </Form.Field>
        <Form.Field>
          <input placeholder="Host of the mentorship program" />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
        <Button onClick={() => setFormOpen(false)} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default ProgramForm;
