import React, { Component } from "react"
import { Form, Header, Divider, Grid } from "semantic-ui-react"
import { connect } from "react-redux"
import { updateUser } from "../actions/users"

class UpdateProfileForm extends Component {
    state = { displayName: "", password: "", about: "" }
    handleChange = (event, { value }) =>
        this.setState({ [event.target.name]: value })

    handleSubmit = () => {
        this.props.updateUser({ ...this.state })
    }

    render() {
        return (
            <React.Fragment>
                <Header as="h2">Enter the information to be updated</Header>
                <Divider />
                <Form onSubmit={this.handleSubmit} size="large">
                    <Grid container stackable>
                        <Grid.Column floated="left" width={8}>
                            <Form.Input
                                placeholder="New display name"
                                name="displayName"
                                fluid
                                label="Change your display name"
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                type="password"
                                placeholder="New password"
                                name="password"
                                fluid
                                label="Change Password"
                                onChange={this.handleChange}
                            />
                            <Form.TextArea
                                placeholder="Tell the world something about you."
                                name="about"
                                label="Change your bio"
                                onChange={this.handleChange}
                            />
                        </Grid.Column>
                        <Grid.Column floated="right" width={3}>
                            <Form.Button
                                type="submit"
                                content="Submit changes"
                            />
                        </Grid.Column>
                    </Grid>
                </Form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.login.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: userData => dispatch(updateUser(userData))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateProfileForm)
