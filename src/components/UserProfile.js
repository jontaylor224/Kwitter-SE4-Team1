import React, { Component } from "react"
import logo from "../userIcon.png"
import { Card, Divider, Image, Header, Segment, Grid } from "semantic-ui-react"
import { connect } from "react-redux"
import { getUserInfo } from "../actions"

class UserProfile extends Component {
    state = {}
    componentDidMount() {
        this.props.getUserInfo()
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
                        {/* <UserMessages /> */}
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

// const mapStateToProps = () => {
//     return {
//         displayName: "Jon",
//         about: "Generic Bio",
//         username: "Jon"
//     }
// }

// const mapStateToProps = state => {
//   return {
//     displayName: state.loggedInUser.displayName,
//     about: state.loggedInUser.about,
//     username: state.loggedInUser.username
//   }
// }

// const mapStateToProps = auth => {
//   return {
//     userId: auth.login.id,
//     // about: state.about,
//     // username: state.username
//   }
// }

const mapDispatchToProps = dispatch => {
    return { getUserInfo: () => dispatch(getUserInfo()) }
}

export default connect(
    ({auth}) => ({
        userId: auth.login.id
    }),
    mapDispatchToProps
)(UserProfile)
