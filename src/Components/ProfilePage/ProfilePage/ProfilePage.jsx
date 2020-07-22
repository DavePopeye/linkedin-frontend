import React, { Component } from "react";
import MainJumbotron from "../MainJumbotron/MainJumbotron";
import SideBar from "../SideBar/SideBar";
import { Container, Row, Col} from "react-bootstrap";
import NavBar from "../../NavBar/NavBar";
import {Link} from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';

class Profile extends Component {
  render() {
    return (
      <>
        <NavBar/> 
        <Container>
          <Row>
            <Col className="col-8">
              <MainJumbotron username={this.props.match.params.id}/>
            </Col>
            <SideBar />
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;