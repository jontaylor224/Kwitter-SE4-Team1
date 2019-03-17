import React, { Component } from "react"
import StickyHeader from "./StickyHeader"
import UserProfile from "./UserProfile"
import { Grid, Segment, Header, Modal, Button } from "semantic-ui-react"
import UpdateProfileForm from "./UpdateProfileForm"

export default class ProfilePage extends Component {
    render() {
        return (
            <React.Fragment>
                <StickyHeader />
                <Grid container stackable>
                    <Grid.Row />
                    <Grid.Row>
                        <Grid.Column floated="left" width={6}>
                            <UserProfile />
                            <Modal trigger={<Button>Update Profile</Button>}>
                                <UpdateProfileForm />
                            </Modal>
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
