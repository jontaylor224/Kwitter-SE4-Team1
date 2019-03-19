import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from ".";
import RegisterForm from "./RegisterForm";
import "semantic-ui-css/semantic.min.css";
import HomeView from "./HomeView";
import ProfilePage from "./ProfilePage";
// import Landing from "./Landing"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/home" render={() => <HomeView />} />
        <Route exact path="/profile" render={() => <ProfilePage />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
        {/* <Route exact path="/landing" render={() => <Landing />} /> */}
      </Switch>
    );
  }
}

export default App;
