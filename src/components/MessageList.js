import React, { Component } from "react";
import MessageItem from "./MessageItem";
import getMessages from "../actions/getMessages";
import { connect } from "react-redux";

export class MessageList extends Component {
  state = { messages: [] };
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.messages.messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
