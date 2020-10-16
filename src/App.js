import React, { Fragment, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import ProgramDashboard from "./components/program/programDashboard/ProgramDashboard";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="App">
      <Container>
        <NavBar setFormOpen={setFormOpen} />
        <ProgramDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </div>
  );
}

export default App;
