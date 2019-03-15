import React, { Component } from "react"
import { Card } from "semantic-ui-react"
import UserImage from "./UserImage"
import { connect } from "react-redux"
import { getLoggedInUserInfo } from "../actions"

class UserAvatar extends Component {
    componentDidMount() {
        this.props.getLoggedInUserInfo()
    }
    render() {
        return (
            <Card>
                <Card.Content>
                    <UserImage userId={this.props.userId} />
                    <Card.Header as="h2" textAlign="left">
                        {this.props.username}
                    </Card.Header>
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.login.id,
        username: state.users.loggedInUser.username
    }
}

const mapDispatchToProps = dispatch => {
    return { getLoggedInUserInfo: () => dispatch(getLoggedInUserInfo()) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAvatar)
