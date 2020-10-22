import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import ProgramList from "../components/program/programDashboard/ProgramList";
import { sampleData } from "../services/sampleData";

const ProgramDashboard = () => {
  const [programs, setPrograms] = useState(sampleData);

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
