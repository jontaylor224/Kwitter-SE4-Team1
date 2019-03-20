import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleAddLike, toggleDeleteLike } from "../actions";
import Moment from "react-moment";

export class MessageItem extends Component {
  handleAddLike = e => {
    console.log(this.props.message.id);
    this.props.toggleAddLike(this.props.message.id);
  };
  handleDeleteLike = () => {
    console.log(this.props.message.id);
    this.props.toggleDeleteLike(this.props.likeId);
  };
  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Event>
          <Feed.Label>
            <img
              src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
              alt=""
            />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{this.props.message.userId}</Feed.User> kweeted on
              <Feed.Date>
                <Moment toNow>{this.props.message.createdAt}</Moment>
              </Feed.Date>
            </Feed.Summary>
            <Feed.Extra>{this.props.message.text}</Feed.Extra>
            <Feed.Meta>
              <Feed.Like onClick={this.handleAddLike}>
                <Icon name="like" />
                {this.props.message.likes === undefined
                  ? 0
                  : this.props.message.likes.length}
              </Feed.Like>
              <Feed.Like>
                <Icon name="thumbs down" />4 Dislikes
              </Feed.Like>
            </Feed.Meta>
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
  { toggleAddLike, toggleDeleteLike }
)(MessageItem);
