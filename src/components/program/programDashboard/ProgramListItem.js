import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import ProgramListMentees from "./ProgramListMentees";

const ProgramListItem = ({ program, selectProgram }) => {
  return (
    <>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={program.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{program.title}</Item.Header>
                <Item.Description>
                  Hosted by <a href="#home">{program.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {program.date} |
            <Icon name="marker" /> {program.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {program.mentees.map((mentee) => (
              <ProgramListMentees key={mentee.id} mentee={mentee} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{program.description}</span>

          <Button
            as={Link}
            to={`/programs/${program.id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    </>
  );
};

export default ProgramListItem;
