import React, { Component } from "react";
import MessageItem from "./MessageItem";
import {getMessages, getUsers } from "../actions";
import { connect } from "react-redux";

export class MessageList extends Component {
  state = { messages: [] };
  componentDidMount() {
    this.props.getMessages();
    this.props.getUsers();
  }
  matchIdtoUsername = userId => {
    let user = this.props.userList.find(user => user.id === userId);
    if (user) return user.displayName;
    return "Deleted";
  };

  render() {
    return (
      <React.Fragment>
        {this.props.messages.messages.map(message => (
          <MessageItem
            key={message.id}
            message={message}
            displayName={this.matchIdtoUsername(message.userId)}
          />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  userList: state.users.userList
});

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    },
    getUsers: () => {
      dispatch(getUsers())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
