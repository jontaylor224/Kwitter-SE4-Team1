import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getLoggedInUserInfo } from "../actions";
import UserAvatar from "./UserAvatar";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getLoggedInUserInfo();
  }
  render() {
    return (
      <Card style={{margin:'auto'}}>
        <Card.Content>
          <UserAvatar size="medium" />
          <Card.Meta>User since {this.props.createdAt}.</Card.Meta>
          <Card.Header as="h4">Bio:</Card.Header>
          <Card.Description>
            {this.props.about || "This user has not yet created a bio"}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayName: state.users.loggedInUser.displayName,
    about: state.users.loggedInUser.about,
    username: state.users.loggedInUser.username,
    createdAt: state.users.loggedInUser.createdAt
  };
};

const mapDispatchToProps = dispatch => {
  return { getLoggedInUserInfo: () => dispatch(getLoggedInUserInfo()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
