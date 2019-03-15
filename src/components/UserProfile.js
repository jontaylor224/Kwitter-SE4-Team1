import React, { Component } from "react"
import logo from "../userIcon.png"
import { Card, Divider, Image, Header, Segment, Grid } from "semantic-ui-react"
import { connect } from "react-redux"
import { getLoggedInUserInfo } from "../actions"
// import { MessageList} from "./MessageList"

class UserProfile extends Component {
    componentDidMount() {
        this.props.getLoggedInUserInfo()
    }
    render() {
        return (
            <Grid container stackable>
                <Grid.Column floated="left" width={6}>
                    <Card>
                        <Card.Content>
                            <Image src={logo} />
                            <Card.Header as="h2" textAlign="center">
                                {this.props.username}
                            </Card.Header>
                            <Divider />
                            <Card.Description>
                                <Card.Meta as="h3">Bio:</Card.Meta>
                                {this.props.about}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column floated="right" width={10}>
                    <Segment>
                        <Header as="h2" textAlign="center">
                            My Messages
                        </Header>
                        {/* < MessageList /> */}
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        displayName: state.users.loggedInUser.displayName,
        about: state.users.loggedInUser.about,
        username: state.users.loggedInUser.username
    }
}

const mapDispatchToProps = dispatch => {
    return { getLoggedInUserInfo: () => dispatch(getLoggedInUserInfo()) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)
