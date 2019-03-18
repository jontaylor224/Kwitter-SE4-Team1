import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import UserImage from "./UserImage"


export class MessageItem extends Component {
  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <UserImage userId={this.props.message.userId} size="mini" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{this.props.message.userId}</Feed.User> posted on this
              page
              <Feed.Date>{this.props.message.createdAt}</Feed.Date>
            </Feed.Summary>
            <Feed.Extra>{this.props.message.text}</Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />4 Likes
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

export default MessageItem