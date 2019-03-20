import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleAddLike, toggleDeleteLike } from "../actions";

export class MessageItem extends Component {
  handleAddLike = e => {
    console.log(this.props.message.id);
    this.props.toggleAddLike(this.props.message.id);
  };
  handleDeleteLike = () => {
    let curUserId = this.props.userId;
    let curLike = this.props.message.likes.filter((like)=> {if(curUserId===like.userId){
      return like;
    }})
    console.log(curLike);
    if(curLike.length !== 0){
      console.log(curLike[0].id)
      this.props.toggleDeleteLike(curLike[0].id);
    }
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
              <Feed.User>{this.props.message.userId}</Feed.User> posted on this
              page
              <Feed.Date>{this.props.message.createdAt}</Feed.Date>
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
                <Icon name="thumbs down" onClick={this.handleDeleteLike}/>4 Dislikes
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
    userId:auth.login.id
  }),
  { toggleAddLike, toggleDeleteLike }
)(MessageItem);
