import React, { Component } from "react";
import MainJumbotron from "../MainJumbotron/MainJumbotron";
import SideBar from "../../ProfilePage/SideBar/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import Certifications from "../../Certifications/Certifications";
import Dashboard from "../../Dashboard/Dashboard";
import Experiences from "../../Experiences/Experiences";
import Accomplishments from "../../Accomplishments/Accomplishments";
import Education from "../../Education/Education";

class Profile extends Component {
  render() {
    const { user } = this.props;
    const { id } = this.props.match.params;
    return (
      <>
        <Container>
          <Row>
            <Col className="col-8">
              {/* {JSON.stringify(this.props)} */}
              <MainJumbotron editable={user._id === id} id={id} />
              <Dashboard id={id} />
              <Education editable={user._id === id} id={id} />
              <Certifications editable={user._id === id} id={id} />
              <Experiences editable={user._id === id} id={id} />
              <Accomplishments />
            </Col>
            <SideBar />
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
