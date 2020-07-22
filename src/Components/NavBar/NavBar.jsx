import React, { Component } from "react";
import {
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlinePlaySquare,
  AiOutlineTeam,
} from "react-icons/ai";
import { RiBriefcaseLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { IoMdNotificationsOutline, IoIosArrowDropdownCircle } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import "./NavBar.css";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    search: "",
    users: [],
    curentUser: [],
    show: false,
    image: "",
  };

  componentDidMount = () => {
    this.fetchUsers();
  };
  fetchUsers = async (callback) => {
    let response = await fetch("http://linkedinbackend.herokuapp.com/users", {
      method: "GET",
      headers: new Headers({
        Authorization:
          "Basic c3RyYWhpbmphbGFsb3ZpYzkzQGdtYWlsLmNvbToxMjM0NTY3ODk=",
        "Content-type": "application/json",
      }),
    });
    let parsedJson = await response.json();
    this.setState({ users: parsedJson.data });
    callback && callback();
  };

  render() {
    const { user } = this.props;
    return (
      <Navbar
        className="navbar mt-0 fixed-top "
        style={{ height: "55px" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <img
              src={require("../../Images/linkedin.png")}
              className="linked"
            />
          </Navbar.Brand>
          <Form>
            <Dropdown>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                style={{ width: "250px", height: "33px" }}
                onBlur={() => this.setState({ show: false })}
                onClick={() =>
                  this.fetchUsers(() => this.setState({ show: true }))
                }
                onChange={(e) => {
                  this.setState({ search: e.target.value.toLowerCase() }, () =>
                    console.log(this.state.search)
                  );
                  if (e.target.value.length >= 1) {
                    this.setState({ show: true });
                  } else {
                    this.setState({ show: false });
                  }
                }}
              />
              <div style={{ position: "relative", top: "2.5vh" }}>
                <Dropdown.Menu
                  style={{ width: "16.5vw" }}
                  show={this.state.show}
                >
                  {this.state.show ? (
                    this.state.users.map((element) => {
                      if (
                        element.name
                          .toLowerCase()
                          .includes(this.state.search) ||
                        element.lastName
                          .toLowerCase()
                          .includes(this.state.search)
                      ) {
                        return (
                          
                            <Dropdown.Item>
                                <Row>
                                  <Col xs={3}>
                                    <Image
                                      roundedCircle
                                      style={{ width: "100%" }}
                                      src={element.image}
                                    />
                                  </Col>
                                  <Col xs={9}>
                                    {element.name} {element.lastName}
                                  </Col>
                                </Row>
                            </Dropdown.Item>
                         
                        );
                      }
                    })
                  ) : (
                    <Dropdown.Header>Not Found</Dropdown.Header>
                  )}
                </Dropdown.Menu>
              </div>
            </Dropdown>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link className="nav-link navIcon" to="/">
              <AiOutlineHome style={{ fontSize: "20px" }} />
              <div style={{ fontSize: "13px" }}>Home</div>
            </Nav.Link>
            <Nav.Link className="navIcon nav-link" to="/myNetwork">
              <AiOutlineTeam style={{ fontSize: "20px" }} />
              <div style={{ fontSize: "13px" }}>My Network</div>
            </Nav.Link>
            <Nav.Link className="navIcon">
              <RiBriefcaseLine style={{ fontSize: "20px" }} />
              <div style={{ fontSize: "13px" }}> Jobs</div>
            </Nav.Link>
            <Nav.Link className="navIcon">
              <MdMessage style={{ fontSize: "20px" }} />
              <div style={{ fontSize: "13px" }}> Messaging</div>
            </Nav.Link>
            <Nav.Link className="navIcon">
              <IoMdNotificationsOutline style={{ fontSize: "20px" }} />
              <div style={{ fontSize: "13px" }}> Notifications</div>
            </Nav.Link>
            <Nav.Link className="nav-link" to="/">
              <Image
                src={
                  user.image || `https://api.adorable.io/avatars/${user.name}`
                }
                style={{ width: "20px" }}
                alt={`${this.state.curentUser.name}'s image`}
                roundedCircle
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://api.adorable.io/avatars/${user.name}`;
                }}
              />
              <div style={{ fontSize: "13px" }}>
                Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                </svg>
              </div>
            </Nav.Link>
            <Nav.Link
              style={{ borderRight: "1px grey solid", height: "57px" }}
            ></Nav.Link>
            <Nav.Link className="navIcon" href="#work">
              <BsGrid3X3GapFill style={{ fontSize: "20px" }} />

              <div style={{ fontSize: "13px" }}>
                Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                </svg>
              </div>
            </Nav.Link>
            <Nav.Link className="navIcon" href="#learning">
              <AiOutlinePlaySquare style={{ fontSize: "20px" }} />
              <div style={{ fontSize: "13px" }}>Learning</div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);