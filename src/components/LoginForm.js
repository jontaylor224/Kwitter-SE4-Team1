import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import StickyHeader from "./StickyHeader";
import { Form, FormField, Container, Button } from "semantic-ui-react";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <StickyHeader />
        <Container text>
          <Form onSubmit={this.handleLogin}>
            <h1>Login</h1>
            <FormField>
            <Form.Input
                placeholder="Username"
                name="username"
                fluid
                autoFocus
                label="Username"
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
              {isLoading && <Spinner name="circle" color="blue" />}
              {err && <p style={{ color: "red" }}>{err}</p>}
            </FormField>
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
