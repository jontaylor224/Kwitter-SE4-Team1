import React, { Component } from "react"
import FeedComp  from "./Feed"
import { getMessages } from "../actions/messages"
import { connect } from "react-redux"
import { Grid } from "semantic-ui-react"

export class FeedList extends Component {
    state = {messages:[]}
    componentDidMount() {
        this.props.getMessages()
    }
    render() {
        return (
            <Grid container stackable>
                <Grid.Row>
                    <Grid.Column>
                         {this.props.messages.messages.map(message => (
                            <FeedComp message={message} />
                        ))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedList)