import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile } from ".";
import RegisterForm from "./RegisterForm";
import MenuExampleSecondary from "./Header";
import "semantic-ui-css/semantic.min.css";
// import FeedExampleBasic from "./Feed"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/home" render={()=><MenuExampleSecondary />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
        {/* <Route exact path="/feeds" render={() => <FeedExampleBasic />} /> */}
      </Switch>
    );
  }
}

export default App;
