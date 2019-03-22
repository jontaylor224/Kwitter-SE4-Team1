import React, { Component } from "react";
import UserMessageItem from "./UserMessageItem";
import { connect } from "react-redux";
import { Card, Header } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMessages, getUsers } from "../actions";

export class UserMessageList extends Component {
  state = { hasMore: true };
  componentDidMount() {
    this.props.getMessages(20, this.props.offset);
    this.props.getUsers();
  }

  fetchMoreData = () => {
    if (this.props.messages.endOfMessages) {
      this.setState({ hasMore: false });
    } else {
      this.setState({ offset: this.props.offset + 20 }, () =>
        this.props.getMessages(20, this.props.offset)
      );
    }
  };
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Content>
          <Header as="h2" textAlign="center">
            My Kweets
          </Header>
          <InfiniteScroll
            dataLength={this.props.loggedInUser.messages.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            height={500}
            // loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: "center" }}>End of messages.</p>}
          >
            {this.props.loggedInUser.messages
              .sort((a, b) => {
                return b.id - a.id;
              })
              .map(message => (
                <UserMessageItem
                  key={message.id}
                  message={message}
                  displayName={this.props.loggedInUser.displayName}
                />
              ))}
          </InfiniteScroll>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
  messages: state.messages,
  userList: state.users.userList,
  isMessageLoading: state.messages.getMessageLoading,
  endOfMessages: state.messages.endOfMessages,
  offset: state.messages.offset
});

const mapDispatchToProps = dispatch => {
  return {
    getMessages: (limit, offset) => {
      dispatch(getMessages(limit, offset));
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMessageList);
