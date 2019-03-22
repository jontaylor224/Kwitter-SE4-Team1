import React, { Component } from "react";

import StickyHeader from "../StickyHeader";
import UserProfile from "../UserProfile";
import UpdateProfileForm from "../UpdateProfileForm";
import UserMessageList from "../UserMessageList";
import UpdateProfilePicture from "../UpdateProfilePicture";

import { Grid, Segment, Card } from "semantic-ui-react";

export default class ProfileView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Row />
          <Grid.Row columns={2}>
            <Grid.Column floated="left" width={6}>
              <UserProfile />
              <Card style={{margin:'auto', marginTop:'50px'}}>
                <UpdateProfilePicture />
                <UpdateProfileForm />
              </Card>
            </Grid.Column>
            <Grid.Column floated="right" width={10}>
              <Segment>
                <UserMessageList />
              </Segment>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
