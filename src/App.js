import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import ProgramDashboard from "./pages/ProgramDashboard";
import HomePage from "./pages/HomePage";
import ProgramDetailedPage from "./pages/ProgramDetailedPage.js";
import ProgramForm from "./components/program/form/ProgramForm";
import Sandbox from "./redux/sandbox/SandBox";

function App() {
  const { key } = useLocation();

  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />

            <Container className="mainContainer">
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/sandbox" component={Sandbox} />

              <Route exact path="/programs" component={ProgramDashboard} />
              <Route path="/programs/:id" component={ProgramDetailedPage} />
              <Route
                key={key}
                path={["/createProgram", "/manage/:id"]}
                component={ProgramForm}
              />
            </Container>
          </>
        )}
      />
    </div>
  );
}

export default App;
