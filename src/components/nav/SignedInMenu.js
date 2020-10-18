import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Dropdown, Menu, Image } from "semantic-ui-react";

const SignedInMenu = ({ signOut }) => {
  return (
    <>
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
        <Image
          avatar
          spaced="right"
          src="https://randomuser.me/api/portraits/men/20.jpg"
        />
        <Dropdown pointing="top left" text="Bob">
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/createEvent"
              text="Create Event"
              icon="plus"
            />
            <Dropdown.Item text="My profile" icon="user" />
            <Dropdown.Item onClick={signOut} text="Sign out" icon="power" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </>
  );
};

export default SignedInMenu;
