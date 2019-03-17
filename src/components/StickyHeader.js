import React, { Component } from "react"
import { Menu, Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import UserImage from "./UserImage"

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
                                <UserImage
                                    userId={this.props.login.id}
                                    size="mini"
                                />
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
        )
    }
}

export default connect(
    ({ auth, users }) => ({
        login: auth.login,
        displayName: users.loggedInUser.displayName
    }),
    null
)(StickyHeader)
