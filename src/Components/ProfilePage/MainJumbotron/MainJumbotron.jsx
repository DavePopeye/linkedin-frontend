import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  Modal,
  Form,
  Col
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
import Paper from "../../ui/Paper/Paper";
import moment from "moment";
export class MainJumbotron extends Component {
  state = {
    data: [],
    _id: this.props.match.params.id,
    showModal: false,
    user: "",
    newChange: {}
  };

  handleChange = (e) => {
    const {newChange} = this.state
    this.setState({
      newChange: { ...newChange, [e.target.name]: e.target.value },
    });
  };

  editProfile = async () => {
    // const Authorization = localStorage.getItem("authorization");
    const res = await fetch(
      `${ENDPOINTS.USERS}/${this.props.user._id}`,
      {
        method: "PUT",
        body: JSON.stringify(this.state.newChange),
        headers: new Headers({
          Authorization:
            "Basic c3RyYWhpbmphbGFsb3ZpYzkzQGdtYWlsLmNvbToxMjM0NTY3ODk=",
          "Content-type": "application/json",
        }),
      }
    );
    if (res.ok) {
      alert("updated");
      const { data } = await res.json();
      console.log(data);
      this.setState({ modalShow: false });
    } else {
      alert("not updated");
      console.log("EDITING USER", this.state.newChange)
    }
  };

  render() {
    const { user } = this.props;
    console.log("User certification",user)
    return (
      <>

        <Paper style={{ paddingBottom: 20 }} noPadding>
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
                  <RiPencilLine style={{ cursor: "pointer" }} onClick={() => this.setState({ showModal: true })}/>
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
                  {user.area ? <> {user.area} - </>: console.log("No user area")}<span> 51 connections </span>-
                  <span> Contact info </span>
                </p>
              </div>
              <p> at </p>
            </div>
          </div>
          <div>
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
          </div>
        </Paper>
        <Paper id="about">
          <div>
            <p style={{ fontSize: "24px" }}>About</p>
            <p>working on Computational methods in Engineering</p>
          </div>
          <IconContext.Provider value={{ className: "editIcon" }}>
            <div>
              <RiPencilLine />
            </div>
          </IconContext.Provider>
        </Paper>

        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name={"name"}
                    onChange={this.handleChange}
                    value={user.name}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastname">
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                    name={"lastName"}
                    onChange={this.handleChange}
                    value={user.lastName}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
              
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name={"username"}
                    onChange={this.handleChange}
                    value={user.username}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridBirthDate">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                        name={"birthDate"}
                        onChange={this.handleChange}
                        value={moment(user.birthDate).format(
                          "YYYY-MM-DD"
                        )}
                        type={"date"}
                      />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridArea">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    name={"area"}
                    onChange={this.handleChange}
                    value={user.area}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Biography</Form.Label>
                <Form.Control
                    name={"bio"}
                    onChange={this.handleChange}
                    value={user.bio}
                  />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              variant="outline-primary"
              className="buttonStyle"
              onClick={() => this.editProfile()}
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
