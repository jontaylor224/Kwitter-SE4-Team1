import React, { Component } from "react"
import logo from "../logo.svg"
import { Card, Divider, Image, Header, Segment, Grid } from "semantic-ui-react"

class UserProfile extends Component {
    render() {
        return (
            <Grid>
                <Grid.row>
                    <Grid.column width={6}>
                        <Card>
                            <Card.content>
                                <Image src={logo} />
                                <Card.Header as="h2" textAlign="center">
                                    {this.props.username}
                                </Card.Header>
                                <Divider />
                                <Card.Description>
                                    <Card.Meta as="h3">Bio:</Card.Meta>
                                    {this.props.about}
                                </Card.Description>
                            </Card.content>
                        </Card>
                    </Grid.column>
                    <Grid.column floating="right" width={10}>
                        <Segment>
                            <Header as="H2" textAlign="center">
                                My Messages
                            </Header>
                            {/* <UserMessages /> */}
                        </Segment>
                    </Grid.column>
                </Grid.row>
            </Grid>
        )
    }
}

export default UserProfile
