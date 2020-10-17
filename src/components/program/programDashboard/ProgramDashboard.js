import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import ProgramList from "./ProgramList";
import ProgramForm from "../form/ProgramForm";
import { sampleData } from "../../../services/sampleData";

const ProgramDashboard = ({
  formOpen,
  setFormOpen,
  selectProgram,
  selectedProgram,
}) => {
  const [programs, setPrograms] = useState(sampleData);

  //create
  const handleCreateProgram = (program) => {
    setPrograms([...programs, program]);
  };

  //update
  const handleUpdateProgram = (updatedProgram) => {
    setPrograms(
      programs.map((program) =>
        program.id === updatedProgram.id ? updatedProgram : program
      )
    );
    selectProgram(null);
  };

  //delete
  const handleDeleteProgram = (programsId) => {
    setPrograms(programs.filter((prgm) => prgm.id !== programsId));
    setFormOpen(false);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProgramList programs={programs} selectProgram={selectProgram} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <ProgramForm
            setFormOpen={setFormOpen}
            setProgram={setPrograms}
            createProgram={handleCreateProgram}
            updateProgram={handleUpdateProgram}
            selectedProgram={selectedProgram}
            deletePorgram={handleDeleteProgram}
            key={selectedProgram ? selectedProgram.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ProgramDashboard;
