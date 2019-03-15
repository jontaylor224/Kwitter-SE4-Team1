import React, { Component } from "react"
import StickyHeader from "./StickyHeader"
import UserProfile from "./UserProfile"
import { Grid, Segment, Header } from "semantic-ui-react"

export default class ProfilePage extends Component {
    render() {
        return (
            <React.Fragment>
                <StickyHeader />
                <Grid container stackable>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column floated="left" width={6}>
                            <UserProfile />
                        </Grid.Column>
                        <Grid.Column floated="right" width={10}>
                            <Segment>
                                <Header as="h2" textAlign="center">
                                    My Messages
                                </Header>
                                {/* < MessageList /> */}
                            </Segment>{" "}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        )
    }
}
