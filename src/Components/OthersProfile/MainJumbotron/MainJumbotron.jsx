import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  Image,
} from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaCamera, FaPencilAlt, FaEye } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
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

    show: false,
    user: "",
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.id !== this.props.id) {
      this.fetchData();
    }
  }

  async fetchData() {
    const Authorization = localStorage.getItem("authorization");
    let response = await fetch(`${ENDPOINTS.USERS}/${this.props.id}`, {
      method: "GET",
      headers: new Headers({
        Authorization,
        "Content-type": "application/json",
      }),
    });
    let parsedJson = await response.json();
    this.setState({ data: parsedJson.data });
  }

  render() {
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
              {this.state.data.image ? (
                <Image
                  src={this.state.data.image}
                  alt={`${this.state.data.name}'s image`}
                  roundedCircle
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://api.adorable.io/avatars/${this.state.data.name}`;
                  }}
                />
              ) : (
                <Image
                  src={`https://api.adorable.io/avatars/${this.state.data.name}`}
                  alt="User's picture"
                  roundedCircle
                />
              )}
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
                  <Dropdown.Item
                    href={`${ENDPOINTS.USERS}/${this.state.data._id}/cv`}
                  >
                    <BsDownload />
                    Save to PDF
                  </Dropdown.Item>
                  {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div id="profileInfo">
            <div id="info">
              <div id="personalInfo">
                <p>{this.state.data.name + " " + this.state.data.lastName}</p>
                <p>{this.state.data.username}</p>
                <p>
                  {this.state.data.area ? (
                    <> {this.state.data.area} - </>
                  ) : (
                    console.log("No user area")
                  )}
                  <span> 51 connections </span>-<span> Contact info </span>
                </p>
              </div>
              <p> Student </p>
            </div>
          </div>
          <div>
            <div id="present">
              <div>
                <p>Open to job opportunities</p>
                <p>{this.state.data.bio}</p>
                <p>See all details</p>
              </div>
            </div>
            <div id="presentBelowSection">
              <p>All LinkedIn members</p>
            </div>
          </div>
        </Paper>
        <Paper id="about">
          <div>
            <p style={{ fontSize: "24px" }}>About</p>
            <p>{this.state.data.bio}</p>
          </div>
        </Paper>
      </>
    );
  }
}

export default withRouter(MainJumbotron);
