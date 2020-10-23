import React from "react";
import { Item, Segment } from "semantic-ui-react";

const ProgramDetailSidebar = ({ mentees }) => {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {mentees.length} {mentees.length > 1 ? "Persons" : "Person"}{" "}
        participating
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {mentees.map((mentee) => (
            <Item key={mentee.id} style={{ position: "relative" }}>
              <Item.Image
                size="tiny"
                src={mentee.photoURL || "/assets/user.png"}
              />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <span>{mentee.name}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
};

export default ProgramDetailSidebar;
