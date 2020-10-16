import React from "react";
import { Image, List } from "semantic-ui-react";

const ProgramListMentees = ({ mentee }) => {
  return (
    <List.Item>
      <Image size="mini" circular src={mentee.photoURL} />
    </List.Item>
  );
};

export default ProgramListMentees;
