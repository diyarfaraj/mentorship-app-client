import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Input, Menu } from "semantic-ui-react";

const NavBar = ({ setFormOpen }) => {
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
        <Menu.Item position="right">
          <Button
            as={NavLink}
            to="/createProgram"
            basic
            inverted
            content="Create Mentorship Program"
            style={{ marginRight: "0.5em" }}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button
            as={NavLink}
            to="/loginPage"
            basic
            inverted
            content="Log in"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
