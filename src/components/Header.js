
//create header component

import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import ImageExampleAvatar from "./Avatar"

export default class MenuExampleSecondary extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={this.handleItemClick}
                />
                
                <Menu.Menu position='right'>
                   
                    <Menu.Item>
                        <ImageExampleAvatar />
                    </Menu.Item>
                    
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                    
                </Menu.Menu>
                
            </Menu>
        )
    }
}

/*function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);*/
