import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import StickyHeader from "./StickyHeader";
import { Form, FormField, Container } from "semantic-ui-react";

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
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                autoFocus
                required
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                onChange={this.handleChange}
              />
              <button type="submit" disabled={isLoading}>
                Login
              </button>
              {isLoading && <Spinner name="circle" color="blue" />}
              {err && <p style={{ color: "red" }}>{err}</p>}
            </FormField>
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
