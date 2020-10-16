import React from "react";
import { Button, Container, Input, Menu } from "semantic-ui-react";

const NavBar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header link>
          <img
            src="/assets/hearthands.jpg"
            alt="logo"
            style={{ marginRight: ".5em" }}
          />
          Mentorship App
        </Menu.Item>
        <Menu.Item name="Programs" link />
        <Menu.Item name="Mentors" link />
        <Input placeholder="Search..." style={{ height: 43, marginTop: 5 }} />
        <Menu.Item position="right">
          <Button
            onClick={() => setFormOpen(true)}
            basic
            inverted
            content="Create Mentorship Program"
            style={{ marginRight: "0.5em" }}
          />
          <Button basic inverted content="Log in" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
