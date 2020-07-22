import React, { Component } from "react";
import MainJumbotron from "../MainJumbotron/MainJumbotron";
import SideBar from "../SideBar/SideBar";
import { Container, Row, Col} from "react-bootstrap";
import Certifications from "../../Certifications/Certifications"
import {Link} from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import Dashboard from "../../Dashboard/Dashboard";

class Profile extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col className="col-8">
              {/* {JSON.stringify(this.props)} */}
              <MainJumbotron user={this.props.user}/>
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