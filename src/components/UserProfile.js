import React, { Component } from "react"
import { Card, Divider } from "semantic-ui-react"
import { connect } from "react-redux"
import { getLoggedInUserInfo } from "../actions"
import UserImage from "./UserImage"
// import { MessageList} from "./MessageList"

class UserProfile extends Component {
    componentDidMount() {
        this.props.getLoggedInUserInfo()
    }
    render() {
        return (
            <Card>
                <Card.Content>
                    {/* <Image src={logo} /> */}
                    <UserImage userId={this.props.userId} />
                    <Card.Header as="h2" textAlign="left">
                        {this.props.username}
                    </Card.Header>
                    <Divider />
                    <Card.Meta>User since {this.props.createdAt}.</Card.Meta>
                    <Card.Header as="h4">Bio:</Card.Header>
                    <Card.Description>
                        {this.props.about ||
                            "This user has not yet created a bio"}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        displayName: state.users.loggedInUser.displayName,
        about: state.users.loggedInUser.about,
        username: state.users.loggedInUser.username,
        createdAt: state.users.loggedInUser.createdAt
    }
}

const mapDispatchToProps = dispatch => {
    return { getLoggedInUserInfo: () => dispatch(getLoggedInUserInfo()) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)
