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
import {
  IoMdNotificationsOutline,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import "./NavBar.css";
import { Link, withRouter } from "react-router-dom";
import ENDPOINTS from "../../api/endpoints";

class NavBar extends Component {
  state = {
    search: "",
    users: [],
    curentUser: [],
    show: false,
    image: "",
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
            <Link to="/">
              <img
                src={require("../../Images/linkedin.png")}
                className="linked"
              />
            </Link>
          </Navbar.Brand>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                this.props.history.push(`/search/${e.target.value}`);
              }
            }}
            style={{ width: "250px", height: "33px" }}
          />
          <Nav className="ml-auto">
            <Link className="nav-link navIcon" to="/">
              <AiOutlineHome style={{ fontSize: "20px" }} />
              <div style={{ fontSize: "13px" }}>Home</div>
            </Link>
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
            <Link className="nav-link" to="/me">
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
            </Link>
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
