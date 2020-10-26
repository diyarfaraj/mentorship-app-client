import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";

import { deleteProgram } from "../programActions";

const ProgramDetailHeader = ({ program }) => {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`https://randomuser.me/api/portraits/men/22.jpg`}
          style={programImageStyle}
          fluid
        />

        <Segment basic style={programImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={program.title}
                  style={{ color: "white" }}
                />
                <p>{program.date}</p>
                <p>
                  Hosted by <strong>{program.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button
          as={Link}
          to={`/manage/${program.id}`}
          color="orange"
          floated="right"
        >
          Manage Program
        </Button>
        <Button
          as={Link}
          to="/programs"
          onClick={() => dispatch(deleteProgram(program.id))}
          color="red"
          floated="right"
          content="Delete"
        />
      </Segment>
    </Segment.Group>
  );
};

const programImageStyle = {
  filter: "brightness(30%)",
};

const programImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

export default ProgramDetailHeader;
