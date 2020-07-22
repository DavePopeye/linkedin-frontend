import React, { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import ENDPOINTS from "../../api/endpoints";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(ENDPOINTS.USERS + "/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok) {
      const { authorization } = result;
      console.log(result);
      await localStorage.setItem("authorization", authorization);
      this.props.history.push("/");
    } else {
      this.setState({ error: result });
    }
  };
  render() {
    const { error } = this.state;
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <Link to={"/"}>
            <img
              style={{ width: 120 }}
              src={
                "https://camo.githubusercontent.com/6aae0834208943402f6ee3fcc075eb5072e3d45e/68747470733a2f2f636f6e74656e742e6c696e6b6564696e2e636f6d2f636f6e74656e742f64616d2f6d652f627573696e6573732f656e2d75732f616d702f6272616e642d736974652f76322f62672f4c492d4c6f676f2e7376672e6f726967696e616c2e737667"
              }
            />
          </Link>
          <h5 style={{ marginTop: 30 }}>Welcome Back</h5>
          <p style={{ marginTop: 30 }} className={"text-muted"}>
            Don't miss your next opportunity. Sign in to stay updated on your
            professional world.
          </p>
        </div>
        {error && (
          <Alert variant={"danger"}>
            {error.message || "Something went wrong,please try again"}
          </Alert>
        )}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name={"email"}
              onChange={this.handleChange}
              autoFocus
              placeholder={"Email"}
              type={"email"}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name={"password"}
              onChange={this.handleChange}
              placeholder={"Password"}
              type={"password"}
            />
          </Form.Group>
          <Button type={"submit"} style={{ width: "100%", marginTop: 30 }}>
            Sign in
          </Button>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link style={{ fontWeight: "bold" }} to={"/forgot"}>
              Forgot Password
            </Link>
            <p>
              New to Linkedin ?{" "}
              <Link style={{ fontWeight: "bold" }} to={"/signup"}>
                Join Now
              </Link>
            </p>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
