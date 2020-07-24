import React, { Component } from "react";
import MainJumbotron from "../MainJumbotron/MainJumbotron";
import SideBar from "../SideBar/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import Certifications from "../../Certifications/Certifications";
import Dashboard from "../../Dashboard/Dashboard";
import Experiences from "../../Experiences/Experiences";
import Accomplishments from "../../Accomplishments/Accomplishments";
import Education from "../../Education/Education";
import About from "../../About/About";

class Profile extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <Container>
          <Row>
            <Col className="col-8">
              {/* {JSON.stringify(this.props)} */}
              <MainJumbotron {...this.props} />
              <About />
              <Dashboard />
              <Education educations={user.educations} editable={true} />
              <Certifications
                certifications={user.certifications}
                editable={true}
              />
              <Experiences experiences={user.experiences} editable={true} />
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
