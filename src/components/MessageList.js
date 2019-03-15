import React, { Component } from "react";
import MessageItem from "./MessageItem";
import getMessages from "../actions/getMessages";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import MessageForm from "./MessageForm";
import StickyHeader from "./StickyHeader";
import { Container } from "semantic-ui-react";

export class MessageList extends Component {
  state = { messages: [] };
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Container text>
          <Grid container stackable>
            <MessageForm />
            <Grid.Row>
              <Grid.Column>
                {this.props.messages.messages.map(message => (
                  <MessageItem key={message.id} message={message} />
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  messages: state.messages
});
const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
