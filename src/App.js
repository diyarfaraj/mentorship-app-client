import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import ProgramDashboard from "./pages/ProgramDashboard";
import HomePage from "./pages/HomePage";
import ProgramDetailedPage from "./pages/ProgramDetailedPage.js";
import ProgramForm from "./components/program/form/ProgramForm";

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
      <NavBar setFormOpen={handleCreateFormOpen} />

      <Container className="mainContainer">
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/programs" component={ProgramDashboard} />
        <Route path="/programs/:id" component={ProgramDetailedPage} />
        <Route path="/createProgram" component={ProgramForm} />
      </Container>
    </div>
  );
}

export default App;
