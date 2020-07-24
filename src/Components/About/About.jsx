import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Paper from "../ui/Paper/Paper";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      editing: false,
      bio: "",
    };
  }

  render() {
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
                <p>{this.props.user.bio}</p>
              </Col>
            </Row>
          </Container>
        </Paper>
      </>
    );
  }
}
