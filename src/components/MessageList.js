import React, { Component } from "react"
import MessageItem  from "./MessageItem"
import { getMessages } from "../actions/messages"
import { connect } from "react-redux"
import { Grid } from "semantic-ui-react";
import MessageInput from "./MessageInput";

export class MessageList extends Component {
    state = {messages:[]}
    componentDidMount() {
        this.props.getMessages()
    }
    render() {
        return (
            <div id='wrapper' >
            <Grid container stackable>
                <MessageInput />
                <Grid.Row>
                    
                    <Grid.Column>
                         {this.props.messages.messages.map(message => (
                            <MessageItem message={message} />
                        ))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    messages: state.messages
})
const mapDispatchToProps = dispatch => {
    return {
        getMessages: () => {
            dispatch(getMessages())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)