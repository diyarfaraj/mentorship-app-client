import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Input, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push("/");
  };

  const handleSignIn = () => {
    setAuthenticated(true);
    history.push("/programs");
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/home" header>
          <img
            src="/assets/hearthands.jpg"
            alt="logo"
            style={{ marginRight: ".5em" }}
          />
          Mentorship App
        </Menu.Item>
        <Menu.Item as={NavLink} to="/programs" name="Programs" />
        <Menu.Item as={NavLink} to="/mentorsPage" name="Mentors" link />
        <Input placeholder="Search..." style={{ height: 43, marginTop: 5 }} />
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu signIn={handleSignIn} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
