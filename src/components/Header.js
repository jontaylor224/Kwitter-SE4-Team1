import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

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
                <div class="right">
                <Menu.Menu position='right'>
                   <div>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    </div>
                    <div>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                    </div>
                </Menu.Menu>
                </div>
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
