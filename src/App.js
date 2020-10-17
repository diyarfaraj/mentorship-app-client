import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import ProgramDashboard from "./components/program/programDashboard/ProgramDashboard";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleSelectProgram = (program) => {
    setSelectedProgram(program);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedProgram(null);
    setFormOpen(true);
  };

  return (
    <div className="App">
      <Container>
        <NavBar setFormOpen={handleCreateFormOpen} />
        <ProgramDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectProgram={handleSelectProgram}
          selectedProgram={selectedProgram}
        />
      </Container>
    </div>
  );
}

export default App;
