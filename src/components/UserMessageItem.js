import React, { Component } from "react";
import { Feed } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleAddLike, toggleDeleteLike } from "../actions";
// import Moment from "react-moment";
import UserImage from "./UserImage";
import moment from "moment";

export class MessageItem extends Component {
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
                            <Feed.Like>
                                {this.props.message.likes === undefined
                                    ? 0 + " Likes"
                                    : this.props.message.likes.length + " Likes"}
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
