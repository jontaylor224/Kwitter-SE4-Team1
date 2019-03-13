import React, { Component } from "react";
import MessageItem from "./MessageItem";
import { getMessages } from "../actions/messages";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import MessageForm from "./MessageForm";
import Header from "./Header";

export class MessageList extends Component {
  state = { messages: [] };
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
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
