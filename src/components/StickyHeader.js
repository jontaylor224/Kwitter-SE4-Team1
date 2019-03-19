import React, { Component } from "react";
import { Menu, Button, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserImage from "./UserImage";

class StickyHeader extends Component {
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
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
                  <Button>Logout</Button>
                </Menu.Item>
              </Menu.Menu>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Menu.Item>
                <Link to="/">
                    <Button style={{ backgroundColor:"#e6ffff"}}>Login</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/register">
                    <Button style={{ backgroundColor:"#e6ffff"}}>Register</Button>
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
  null
)(StickyHeader);
