import React, { Component } from "react";
import logo from "../userIcon.png";
import { Card, Divider, Image, Header, Segment, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import StickyHeader from "./StickyHeader";

class UserProfile extends Component {
  render() {
    return (
      // <p>USER PROFILE</p>
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Column floated="left" width={6}>
            <Card>
              <Card.Content>
                <Image src={logo} />
                <Card.Header as="h2" textAlign="center">
                  {this.props.username}
                </Card.Header>
                <Divider />
                <Card.Description>
                  <Card.Meta as="h3">Bio:</Card.Meta>
                  {this.props.about}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column floated="right" width={10}>
            <Segment>
              <Header as="h2" textAlign="center">
                My Messages
              </Header>
              {/* <UserMessages /> */}
            </Segment>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => {
  return {
    displayName: "Jon",
    about: "Generic Bio",
    username: "Jon"
  };
};
// const mapStateToProps = state => {
//   return {
//     displayName: state.loggedInUser.displayName || 'Jon',
//     about: state.loggedInUser.about || 'Generic Bio',
//     username: state.loggedInUser.username || 'Jon'
//   }
// }

export default connect(
  mapStateToProps,
  null
)(UserProfile);
