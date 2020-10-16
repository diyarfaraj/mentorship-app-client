import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import ProgramList from "./ProgramList";
import ProgramForm from "../form/ProgramForm";
import { sampleData } from "../../../services/sampleData";

const ProgramDashboard = ({ formOpen, setFormOpen }) => {
  const [programs, setPrograms] = useState(sampleData);

  const handleCreateProgram = (program) => {
    setPrograms([...programs, program]);
  };
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProgramList programs={programs} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <ProgramForm
            setFormOpen={setFormOpen}
            setProgram={setPrograms}
            createProgram={handleCreateProgram}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ProgramDashboard;
