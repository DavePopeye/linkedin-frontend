import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";
import Paper from "../ui/Paper/Paper";
import ENDPOINTS from "../../api/endpoints";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      editing: false,
    };
  }

  async componentDidMount() {
    const Authorization = localStorage.getItem("authorization");
    const response = await fetch(
      `https://linkedinbackend.herokuapp.com/users/me`,
      {
        method: "GET",
        headers: {
          Authorization,
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    this.setState({ users: json.data });
  }

  editAbout = async () => {
    const { user } = this.props;
    const Authorization = localStorage.getItem("authorization");
    const res = await fetch(`${ENDPOINTS.USERS}/${user._id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.certification),
      headers: {
        Authorization,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      console.log(data);
      this.setState({ modalShow: false });
      this.props.reFetch && this.props.reFetch();
    } else {
      const msg = await res.json();
      console.log(msg);
    }
  };

  render() {
    console.log(this.state.users._id);
    return (
      <>
        <Paper>
          <Container>
            <Row className="d-flex align-items-center m-1 my-3 pt-0">
              <Col xs={6}>
                <h4 className="headerStyle">About</h4>
              </Col>
            </Row>
            <Row className="d-flex align-items-center m-1 my-3 pt-0">
              <Col xs={6}>
                <p>{this.state.users.bio}</p>
              </Col>
            </Row>
          </Container>
        </Paper>
      </>
    );
  }
}
