import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import ProgramDashboard from "./components/program/programDashboard/ProgramDashboard";

function App() {
  return (
    <div className="App">
      <h1>Mentorship App</h1>
      <NavBar />
      <ProgramDashboard />
    </div>
  );
}

export default App;
