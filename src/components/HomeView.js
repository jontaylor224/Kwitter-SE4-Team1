import React, { Component } from "react";
import getMessages from "../actions/getMessages";
import { Grid } from "semantic-ui-react";
import MessageForm from "./MessageForm";
import StickyHeader from "./StickyHeader";
import MessageList from "./MessageList"

export class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Row>
            <Grid.Column floated="right" width={10}>
              <MessageForm />
              <MessageList></MessageList>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
export default HomeView
