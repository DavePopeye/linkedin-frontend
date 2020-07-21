import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Dropdown,
  Container
} from "react-bootstrap";
import {
    AiOutlineHome,
    AiOutlineTeam,
    AiOutlinePlaySquare,
  } from "react-icons/ai";
  import { RiBriefcaseLine } from "react-icons/ri";
  import { MdMessage } from "react-icons/md";
  import { IoMdNotificationsOutline } from "react-icons/io";
  import { BsGrid3X3GapFill } from "react-icons/bs";
import './NavBar.css'
import {Link} from 'react-router-dom'


class NavBar extends Component {

    state = {
        search: "",
        users: [],
        show: false,
        image :''
      };

    componentDidMount= async()=> {
        let response = await fetch(
            "http://linkedinbackend.herokuapp.com/users",
            {
                method: "GET",
                headers: new Headers({
                    Authorization: "Basic c3RyYWhpbmphbGFsb3ZpYzkzQGdtYWlsLmNvbToxMjM0NTY3ODk=",
                    "Content-type": "application/json",
                }),
            }
            )
            let parsedJson = await response.json()
            this.setState({ users: parsedJson.data });
        console.log(this.state.users)
        }
        
  render() {
    return (
        <Navbar
        className="navbar mt-0 fixed-top "
        style={{ height: "55px" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"
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
                <Dropdown.Menu show={this.state.show}>
                {this.state.show ? (
                  this.state.users.map((element) => {
                    if (
                      element.name.toLowerCase().includes(this.state.search) || element.lastName.toLowerCase().includes(this.state.search)
                    ) {
                      return (
                        
                          <Dropdown.Item key={element._id}><div className='nav-link' to={"/users/" + element.name + element.lastName}>{element.name} {element.lastName}</div></Dropdown.Item>
                        
                      );
                    }
                  })
                ) : (
                  <div>notfound</div>
                )}
                </Dropdown.Menu>
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
              <img src='./photo.png'
                style={{ borderRadius: "50%", height: "20px", width: "20px" }}
              ></img>
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

export default NavBar;
