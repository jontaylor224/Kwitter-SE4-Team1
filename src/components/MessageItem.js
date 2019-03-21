import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleAddLike, toggleDeleteLike } from "../actions";
// import Moment from "react-moment";
import UserImage from "./UserImage";
import moment from "moment";

export class MessageItem extends Component {
  handleAddLike = e => {
    console.log(this.props.message.id);
    this.props.toggleAddLike(this.props.message.id);
  };
  handleDeleteLike = () => {
    let curUserId = this.props.userId;
    let curLike = this.props.message.likes.filter(like => {
      if (curUserId === like.userId) {
        return like;
      }
      return null
    });
    console.log(curLike);
    if (curLike.length !== 0) {
      console.log(curLike[0].id);
      this.props.toggleDeleteLike(curLike[0].id);
    }
  };
  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Event>
          <Feed.Label>
            <UserImage userId={this.props.message.userId} size="mini" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User style={{ color: "black" }}>
                {this.props.displayName}
              </Feed.User>
              <Feed.Date>
                {/* <Moment fromNow ago>{this.props.message.createdAt}</Moment> ago. */}
                {moment(this.props.message.createdAt).fromNow()}
              </Feed.Date>
            </Feed.Summary>
            <Feed.Extra>{this.props.message.text}</Feed.Extra>
            <Feed.Meta>
              <Feed.Like onClick={this.handleAddLike}>
                <Icon name="like" color='white' />
                {this.props.message.likes === undefined
                  ? 0 + " Likes"
                  : this.props.message.likes.length + " Likes"}
              </Feed.Like>
              <Feed.Like>
                <Icon name="thumbs down" onClick={this.handleDeleteLike} />
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError,
    token: auth.login.token,
    userId: auth.login.id
  }),
  { toggleAddLike, toggleDeleteLike }
)(MessageItem);
