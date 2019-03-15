import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
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
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <ImageExampleAvatar />
              </Menu.Item>
              <Menu.Item name="logout" />
            </Menu.Menu>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Menu.Item>
              <Link to="/">Login</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/register">Register</Link>
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
