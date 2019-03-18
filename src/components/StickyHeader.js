import React, { Component } from "react";
import { Menu, Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserImage from "./UserImage";
import { logoutThenGoToLogin as logout } from "../actions"

class StickyHeader extends Component {

  handleLogout = () => {
    this.props.logout(this.props.login.token);
  };

  render() {
    return (
      <React.Fragment>
        <Menu secondary>
          {this.props.login !== null ? (
            <React.Fragment>
              <Menu.Item>
                <Link to="/home">
                  <Button>Home</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/profile">
                  <Button>Profile</Button>
                </Link>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <UserImage userId={this.props.login.id} size="mini" />
                  {this.props.displayName}
                </Menu.Item>
                <Menu.Item>
                  <Button onClick={this.handleLogout}>Logout</Button>
                </Menu.Item>
              </Menu.Menu>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Menu.Item>
                <Link to="/">
                  <Button>Login</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </Menu.Item>
            </React.Fragment>
          )}
        </Menu>
        <Divider />
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth, users }) => ({
    login: auth.login,
    displayName: users.loggedInUser.displayName
  }),
  { logout }
)(StickyHeader);
