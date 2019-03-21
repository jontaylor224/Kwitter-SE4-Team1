import React, { Component } from "react";
import MessageItem from "./MessageItem";
import { connect } from "react-redux";

export class UserMessageList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.loggedInUser.messages.map(message => (
          <MessageItem
            key={message.id}
            message={message}
            displayName={this.props.loggedInUser.displayName}
          />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser
});

export default connect(
  mapStateToProps,
  null
)(UserMessageList);
