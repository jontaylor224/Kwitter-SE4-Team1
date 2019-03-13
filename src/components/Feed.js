import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

const Feed = () => (
    <Feed>
        <Feed.Event>
            <Feed.Label>
                <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt=""/>
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User>Elliot Fu</Feed.User> posted on this page
          <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                    Ours is a life of constant reruns. We're always circling back to where we'd we started,
                    then starting all over again. Even if we don't run extra laps that day, we surely will
                    come back for more of the same another day soon.
                </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like' />
                        4 Likes
          </Feed.Like>
                    <Feed.Like>
                        <Icon name='thumbs down' />
                        4 Dislikes
          </Feed.Like>
                        
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    </Feed>
)

//export default FeedExampleBasic
// export default connect(
//     ({ auth }) => ({
//         isLoading: auth.loginLoading,
//         err: auth.loginError
//     }),
//     { login }
// )(LoginForm);

const mapStateToProps = () => {
  return {
    displayName: "Jon",
    about: "Generic Bio",
    username: "Jon"
  };
};