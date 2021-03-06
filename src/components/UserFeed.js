import React, { Component } from "react";
import UserItem from "./UserItem";
import { getUsers } from "../actions/users";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

export class UserFeed extends Component {
  state = { userList: [] };
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <Card
        style={{
          height: "305px",
          overflow: "scroll",
          margin: "auto",
          marginTop: "30px"
        }}
      >
        <Card.Content>
          <Card.Header>Kweeters</Card.Header>
          {this.props.userList.map(user => (
            <UserItem
              key={user.id}
              displayName={user.displayName}
              createdAt={user.createdAt}
              id={user.id}
            />
          ))}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.users.userList
});

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFeed);
