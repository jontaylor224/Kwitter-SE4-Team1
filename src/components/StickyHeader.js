import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
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
        <Menu secondary id="menubar">
          {this.props.login !== null ? (
            <React.Fragment>
              <Menu.Item>
                <Link to="/home">
                  <Button style={{ backgroundColor: "#e6ffff" }}>
                    Home
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/profile">
                  <Button style={{ backgroundColor: "#e6ffff" }}>
                    Profile
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <UserImage userId={this.props.login.id} size="mini" />
                  {this.props.displayName}
                </Menu.Item>
                <Menu.Item>
                  <Button
                    style={{ backgroundColor: "#e6ffff" }}
                    onClick={this.handleLogout}
                  >
                    Logout
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Menu.Item>
                <Link to="/">
                  <Button style={{ backgroundColor: "#e6ffff" }}>
                    Login
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/register">
                  <Button style={{ backgroundColor: "#e6ffff" }}>
                    Register
                  </Button>
                </Link>
              </Menu.Item>
            </React.Fragment>
          )}
        </Menu>
        
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
