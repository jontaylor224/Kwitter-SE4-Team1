import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MessageForm from "./MessageForm";
import StickyHeader from "./StickyHeader";
import MessageList from "./MessageList";
import UserAvatar from "./UserAvatar";
import UserList from "./UserList";

export class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <UserAvatar />
              <UserList />
            </Grid.Column>
            <Grid.Column width={10}>
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
