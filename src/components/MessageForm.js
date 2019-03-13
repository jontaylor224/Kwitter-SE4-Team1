//input component
import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class MessageForm extends Component {
  render() {
    return (
      <Form onSubmit={this.handleLogin}>
        <Form.Field>
          <label>Enter new message</label>
          <input placeholder="Enter message ..." />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default MessageForm;
