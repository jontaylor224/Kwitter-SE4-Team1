import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToUserProfile as register } from "../actions";
import Spinner from "react-spinkit";
import StickyHeader from "./StickyHeader";
import { Form, FormField, Card, Button } from "semantic-ui-react";

class RegisterForm extends Component {
  state = { username: "", password: "" };

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <StickyHeader />
        <Card style={{ margin: "auto" }}>
          <Card.Content>
            <Form onSubmit={this.handleRegister}>
              <h1>Register</h1>
              <FormField>
                <Form.Input
                  placeholder="Username"
                  name="username"
                  required
                  fluid
                  autoFocus
                  label="Username"
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="New display name"
                  name="displayName"
                  required
                  fluid
                  label="Display name"
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  required
                  fluid
                  label="Password"
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Confirm Password"
                  name="password"
                  type="password"
                  required
                  fluid
                  label="Confirm Password"
                  onChange={this.handleChange}
                />
                {isLoading && <Spinner name="circle" color="blue" />}
                {err && <p style={{ color: "red" }}>{err}</p>}
              </FormField>
              <Button type="submit" disabled={isLoading}>
                Submit
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.registerError
  }),
  { register }
)(RegisterForm);
