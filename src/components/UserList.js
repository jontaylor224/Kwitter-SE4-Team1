import React, { Component } from "react";
import UserItem from "./UserItem";
import { getUsers } from "../actions/users";
import { connect } from "react-redux";

export class UserList extends Component {
    state = { userList: [] };
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        return (
            <React.Fragment>
                {this.props.userList.map(user => (
                    <UserItem key={user.id} displayName={user.displayName} createdAt={user.createdAt} />
                ))}
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({
    userList: state.users.userList
});

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
