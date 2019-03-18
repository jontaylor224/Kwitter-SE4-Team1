import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MessageForm from "./MessageForm";
import StickyHeader from "./StickyHeader";
import MessageList from "./MessageList";
import UserAvatar from "./UserAvatar"

export class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Row columns={2}>
          <Grid.Column width={5}>
            <UserAvatar/>
          </Grid.Column>
            <Grid.Column width={5}>
              <MessageForm />
              <MessageList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
export default HomeView;
