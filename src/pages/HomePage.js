import React from "react";
import {
  Segment,
  Header,
  Image,
  Button,
  Grid,
  Form,
  Message,
  Container,
} from "semantic-ui-react";

const HomePage = ({ history }) => (
  <Grid style={{ background: "#f0f2f5", height: "100vh" }}>
    <Container>
      <Grid
        textAlign="center"
        style={{ height: "100vh", background: "transparent" }}
        verticalAlign="middle"
      >
        <Grid.Column width={8}>
          <h2>Mentorship App</h2>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h2" color="blue" textAlign="center">
            <Image src="/assets/hearthands.jpg" /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="blue" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us?
            <Button
              onClick={() => history.push("/programs")}
              content="Get Started"
              color="green"
              style={{ marginLeft: "10px" }}
            />
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  </Grid>
);

export default HomePage;
