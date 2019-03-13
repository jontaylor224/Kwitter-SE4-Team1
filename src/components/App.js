import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile } from ".";
import RegisterForm from "./RegisterForm";
import MenuExampleSecondary from "./Header";
import "semantic-ui-css/semantic.min.css";
import MessageList from "./MessageList"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/home" render={()=><MenuExampleSecondary />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
        <Route exact path="/messages" render={() => <MessageList />} />
      </Switch>
    );
  }
}

export default App;
