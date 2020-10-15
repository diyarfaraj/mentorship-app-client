import React from "react";
import { Grid } from "semantic-ui-react";
import ProgramList from "./ProgramList";

const ProgramDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProgramList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>right column</h2>
      </Grid.Column>
    </Grid>
  );
};

export default ProgramDashboard;
