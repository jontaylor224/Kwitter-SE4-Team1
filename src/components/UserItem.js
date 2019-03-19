import React, { Component } from "react";
import { Feed } from "semantic-ui-react";
import { connect } from "react-redux";

export class UserItem extends Component {
 
  
  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{this.props.displayName}</Feed.User> 
              <Feed.Date>{this.props.createdAt}</Feed.Date>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default connect(
  ({ auth, likes }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError,
    token: auth.login.token,
    likeId: likes.likeId
  }),
  null
)(UserItem);
