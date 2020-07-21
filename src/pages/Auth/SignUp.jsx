import React, { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ENDPOINTS from "../../api/endpoints";

class SignUp extends Component {
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
    let response = await fetch(ENDPOINTS.USERS, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result);
    } else {
      this.setState({ error: result });
    }
  };
  render() {
    const { error } = this.state;
    return (
      <div style={{ minWidth: "35vw" }}>
        <div style={{ textAlign: "center" }}>
          <Link to={"/"}>
            <img
              style={{ width: 120 }}
              src={
                "https://camo.githubusercontent.com/6aae0834208943402f6ee3fcc075eb5072e3d45e/68747470733a2f2f636f6e74656e742e6c696e6b6564696e2e636f6d2f636f6e74656e742f64616d2f6d652f627573696e6573732f656e2d75732f616d702f6272616e642d736974652f76322f62672f4c492d4c6f676f2e7376672e6f726967696e616c2e737667"
              }
            />
          </Link>
          <p style={{ marginTop: 30 }} className={"text-muted"}>
            Make the most of your professional life
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
          <p className={"text-muted small"}>
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </p>
          <Button type={"submit"} style={{ width: "100%", marginTop: 30 }}>
            Agree & Join
          </Button>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <p>
              Already have an account ?{" "}
              <Link style={{ fontWeight: "bold" }} to={"/login"}>
                Join Now
              </Link>
            </p>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;
