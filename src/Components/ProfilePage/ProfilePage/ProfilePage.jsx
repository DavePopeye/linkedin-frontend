import React, { Component } from "react";
import Footer from '../../Footer/Footer'
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
        <Container className='mt-5 pt-3'>
          <Row>
            <Col className="col-8">
              <MainJumbotron username={this.props.match.params.id}/>
              <div id='experiences'>
                <div id='header'>
                  <p>Experience</p>
                  <Link to='/me'><FaPlus/></Link>
                </div>
              </div>
            </Col>
            <SideBar />
          </Row>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Profile;