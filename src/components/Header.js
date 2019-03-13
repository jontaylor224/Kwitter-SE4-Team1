import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import ImageExampleAvatar from "./Avatar"
import { Link } from "react-router-dom"

class Header extends Component {
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        return (
            <Menu secondary>
                <Menu.Item>
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/messages">Messages</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">Login</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/register">Register</Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <ImageExampleAvatar />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                    // onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header
