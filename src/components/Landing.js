import React, { Component } from "react";
import Spinner from "react-spinkit";
import StickyHeader from "./StickyHeader";
import { Form, FormField, Container, Button } from "semantic-ui-react";
import logo from "../logo1.png";

export default class Landing extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <div className="ui vertically divided grid" id="landingpageparent">
          <div className="two column row">
            <div className="column" id="landingpageleft">
              <div style={{ margin: "100px auto", width: "250px" }}>
                <h4
                  style={{
                    fontFamily: "'Pacifico', 'cursive'",
                    fontSize: "35px"
                  }}
                >
                  KWITTER
                </h4>
                <img src={logo} alt="" />
                <p
                  style={{
                    fontSize: "30px",
                    fontFamily: "'Open Sans', sans-serif",
                    fontStyle:"italic"
                  }}
                >
                  Kweet Kweet!!
                </p>
              </div>
            </div>
            <div className="column" id="landingpageright">
              <StickyHeader />
              <Container text>
                <Form onSubmit={this.handleLogin}>
                  <h1>Login</h1>
                  <FormField>
                    <Form.Input
                      placeholder="Username"
                      name="username"
                      fluid
                      autoFocus
                      label="Username"
                      onChange={this.handleChange}
                    />
                    <Form.Input
                      placeholder="Password"
                      name="password"
                      type="password"
                      required
                      fluid
                      label="Password"
                      onChange={this.handleChange}
                    />
                    {isLoading && <Spinner name="circle" color="blue" />}
                    {err && <p style={{ color: "red" }}>{err}</p>}
                  </FormField>
                  <Button
                    type="submit"
                    style={{ backgroundColor: "#e6ffff" }}
                    disabled={isLoading}
                  >
                    Submit
                  </Button>
                </Form>
              </Container>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// export default connect(
//   ({ auth }) => ({
//     isLoading: auth.loginLoading,
//     err: auth.loginError
//   }),
//   { login }
// )(Landing);
