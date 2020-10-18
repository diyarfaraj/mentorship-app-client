import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

const SignedOutMenu = ({ signIn }) => {
  return (
    <Menu.Item position="right">
      <Button
        basic
        inverted
        content="Log in"
        onClick={signIn}
        style={{ marginRight: "5px" }}
      />
      <Button as={NavLink} to="/registerPage" positive content="Register" />
    </Menu.Item>
  );
};

export default SignedOutMenu;
