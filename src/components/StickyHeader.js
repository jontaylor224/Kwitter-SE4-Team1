import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ImageExampleAvatar from "./Avatar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class StickyHeader extends Component {
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    return (
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
                <ImageExampleAvatar />
              </Menu.Item>
              <Button>
                <Menu.Item name="logout" />
              </Button>
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
    );
  }
}

export default connect(
  ({ auth }) => ({
    login: auth.login
  }),
  null
)(StickyHeader);
