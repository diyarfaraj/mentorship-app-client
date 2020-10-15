import React from "react";
import { Container, Menu } from "semantic-ui-react";

const NavBar = (params) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header> Mentorship App</Menu.Item>
        <Menu.Item name="Programs" />
        <Menu.Item name="Mentors" />
      </Container>
    </Menu>
  );
};

export default NavBar;
