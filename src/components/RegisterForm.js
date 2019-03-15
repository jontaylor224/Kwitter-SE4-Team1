import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToUserProfile as register } from "../actions";
import Spinner from "react-spinkit";
import StickyHeader from "./StickyHeader";
import { Form, FormField, Container } from "semantic-ui-react";

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
        <Form>
          <StickyHeader />
          <Container text>
            <h1>Register</h1>
            <FormField>
              <form onSubmit={this.handleRegister}>
                <label htmlFor="username">Username</label>
                <div class="ui input">
                  <input
                    type="text"
                    name="username"
                    autoFocus
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <label htmlFor="username">Display Name</label>
                <input
                  type="text"
                  name="displayName"
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
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  onChange={this.handleChange}
                />
                <button type="submit" disabled={isLoading}>
                  Register
                </button>
              </form>
              {isLoading && <Spinner name="circle" color="blue" />}
              {err && <p style={{ color: "red" }}>{err}</p>}
            </FormField>
          </Container>
        </Form>
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
