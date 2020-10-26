import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import ProgramList from "../components/program/programDashboard/ProgramList";

const ProgramDashboard = () => {
  const { programs } = useSelector((state) => state.program);

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProgramList programs={programs} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default ProgramDashboard;
