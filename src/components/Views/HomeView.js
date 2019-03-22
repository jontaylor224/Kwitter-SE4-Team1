import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";

import MessageForm from "../MessageForm";
import StickyHeader from "../StickyHeader";
import MessageList from "../MessageList";
import UserAvatar from "../UserAvatar";
import UserList from "../UserList";

export class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Row />
          <Grid.Row columns={2}>
            <Grid.Column floated="left" width={6}>
              <Card>
                <Card.Content>
                  <UserAvatar />
                </Card.Content>
              </Card>
                
                  <UserList />
                
            </Grid.Column>
            <Grid.Column floated="right" width={10}>
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
