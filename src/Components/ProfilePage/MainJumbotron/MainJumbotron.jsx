import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  Modal,
  Form,
} from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaCamera, FaPencilAlt, FaEye } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter, Link } from "react-router-dom";
import "./MainJumbotron.css";
import { ButtonGroup } from "react-bootstrap/cjs";
import ENDPOINTS from "../../../api/endpoints";
import { BsDownload } from "react-icons/bs";
import Avatar from "../../Avatar/Avatar";
export class MainJumbotron extends Component {
  state = {
    data: [],
    _id: this.props.match.params.id,
    show: false,
    user: "",
  };

  render() {
    const { user } = this.props;
    return (
      <>
        <Jumbotron>
          <div className="bgImage">
            <img
              src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
              alt=""
            />
            <IconContext.Provider value={{ className: "jumbotronCamera" }}>
              <div>
                <FaCamera />
              </div>
            </IconContext.Provider>
          </div>
          <div id="profileSection">
            <div style={{ cursor: "pointer" }}>
              {user.image ? (
                <Avatar
                  src={user.image}
                  roundedCircle
                  callBack={this.props.reFetch}
                  updateUrl={`https://linkedinbackend.herokuapp.com/users/${user._id}/photo`}
                />
              ) : (
                <img
                  onClick={this.verifyProfile}
                  src={`https://api.adorable.io/avatars/${user.name}`}
                  alt=""
                />
              )}
              {/* <img src="https://capenetworks.com/static/images/testimonials/user-icon.svg" alt=""/> */}
            </div>
            <div id="profileButtons">
              <DropdownButton
                id="dropdown-basic-button"
                title="Add profile section"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>

              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  split
                  as={Button}
                  variant="outline-info"
                  id="dropdown-split-basic"
                >
                  More..
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href={`${ENDPOINTS.USERS}/${user._id}/cv`}>
                    <BsDownload />
                    Save to PDF
                  </Dropdown.Item>
                  {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                </Dropdown.Menu>
              </Dropdown>
              <IconContext.Provider value={{ className: "editIcon" }}>
                <div>
                  <RiPencilLine />
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div id="profileInfo">
            <div id="info">
              <div id="personalInfo">
                <p>{user.name + " " + user.lastName}</p>
                <p>{user.username}</p>
                <p>
                  {user.area} -<span> 51 connections </span>-
                  <span> Contact info </span>
                </p>
              </div>
              <p>Leibniz Universitat Hannover</p>
            </div>
          </div>
          <div id="present">
            <div>
              <p>Open to job opportunities</p>
              <p>{user.bio}</p>
              <p>See all details</p>
            </div>
            <IconContext.Provider value={{ className: "editIcon" }}>
              <div>
                <RiPencilLine />
              </div>
            </IconContext.Provider>
          </div>
          <div id="presentBelowSection">
            <IconContext.Provider value={{ className: "eyeIcon" }}>
              <div>
                <FaEye />
              </div>
            </IconContext.Provider>
            <p>All LinkedIn members</p>
          </div>
        </Jumbotron>
        <div id="about">
          <div>
            <p style={{ fontSize: "24px" }}>About</p>
            <p>working on Computational methods in Engineering</p>
          </div>
          <IconContext.Provider value={{ className: "editIcon" }}>
            <div>
              <RiPencilLine />
            </div>
          </IconContext.Provider>
        </div>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.File label="Example file input" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={(e) => this.setState({ show: false })}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(MainJumbotron);
