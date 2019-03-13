import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export class FeedComp extends Component {
  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img
              src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
              alt=""
            />
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

export default FeedComp