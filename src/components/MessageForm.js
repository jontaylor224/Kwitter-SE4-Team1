import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { createMessage } from "../actions";

class MessageForm extends Component {
  state = { token: this.props.token, text: "" };

  handleCreateMessage = e => {
    e.preventDefault();
    this.props.createMessage(this.state);
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { isLoading, err, user } = this.props;
    return (
      <Form onSubmit={this.handleCreateMessage}>
        <Form.Field>
          <label>Enter new message</label>
          <input placeholder="Enter message ..." onChange={this.handleChange} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError,
    token: auth.login.token
  }),
  { createMessage }
)(MessageForm);
