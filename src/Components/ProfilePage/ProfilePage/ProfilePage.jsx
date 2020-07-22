import React, { Component } from "react";
import MainJumbotron from "../MainJumbotron/MainJumbotron";
import SideBar from "../SideBar/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import Certifications from "../../Certifications/Certifications";
import Dashboard from "../../Dashboard/Dashboard";

class Profile extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col className="col-8">
              {/* {JSON.stringify(this.props)} */}
              <MainJumbotron {...this.props} />
              <Certifications />
              <Dashboard />
            </Col>
            <SideBar />
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
