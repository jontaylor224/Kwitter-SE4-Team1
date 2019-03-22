import React, { Component } from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserImage from "./UserImage";
import { logoutThenGoToLogin as logout } from "../actions";
import logo from "../img/squirrellogo.png";

class StickyHeader extends Component {
  handleLogout = () => {
    this.props.logout(this.props.login.token);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.login !== null ? (
          <Menu id="menubar">
            <React.Fragment>
              <Menu.Item>
                Kwitter
                <Image src={logo} alt="" style={{ width: "50px" }} />
              </Menu.Item>
              <Menu.Item>
                <Link to="/home">
                  <Button
                    style={{ backgroundColor: "#ffa366" }}
                  >
                    Home
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/profile">
                  <Button style={{ backgroundColor: "#ffa366" }}>
                    Profile
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <span style={{ marginRight: "10px" }}>
                    {this.props.displayName}
                  </span>
                  <UserImage userId={this.props.login.id} size="mini" />
                </Menu.Item>
                <Menu.Item>
                  <Button
                    style={{ backgroundColor: "#ffa366" }}
                    onClick={this.handleLogout}
                  >
                    Logout
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            </React.Fragment>
          </Menu>
        ) : (
          <Menu secondary id="menubar">
            <React.Fragment>
              <Menu.Item>
                <Link to="/">
                  <Button style={{ backgroundColor: "#ffa366" }}>
                    Login
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/register">
                  <Button style={{ backgroundColor: "#ffa366" }}>
                    Register
                  </Button>
                </Link>
              </Menu.Item>
            </React.Fragment>
          </Menu>
        )}
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
