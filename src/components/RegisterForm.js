import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToUserProfile as register } from "../actions";
import Spinner from "react-spinkit";
import StickyHeader from "./StickyHeader";
import { Form, FormField, Container, Button } from "semantic-ui-react";

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
        <Container text>
          <Form onSubmit={this.handleRegister}>
            <h1>Register</h1>
            <FormField>
              
                <label>Username</label>
                <div className="ui input">
                  <input
                    type="text"
                    name="username"
                    autoFocus
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <label>Display Name</label>
                <input
                  type="text"
                  name="displayName"
                  required
                  onChange={this.handleChange}
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  onChange={this.handleChange}
                />
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
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
    err: auth.registerError
  }),
  { register }
)(RegisterForm);
