import React, { Component } from "react";
import MainJumbotron from "../MainJumbotron/MainJumbotron";
import SideBar from "../../ProfilePage/SideBar/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import Certifications from "../../Certifications/Certifications";
import Dashboard from "../../Dashboard/Dashboard";
import Experiences from "../../Experiences/Experiences";
import Accomplishments from "../../Accomplishments/Accomplishments";
import Education from "../../Education/Education";
import ENDPOINTS from "../../../api/endpoints";
import Loading from "../../Loading/Loading";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    this.setState({ loading: true });
    const { id } = this.props.match.params;
    const Authorization = localStorage.getItem("authorization");
    let response = await fetch(`${ENDPOINTS.USERS}/${id}`, {
      method: "GET",
      headers: new Headers({
        Authorization,
        "Content-type": "application/json",
      }),
    });
    let { data } = await response.json();
    this.setState({ user: data, loading: false });
  };
  render() {
    const authorizedUser = this.props.user;
    const { user, loading } = this.state;

    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <Container>
            <Row>
              <Col className="col-8">
                <MainJumbotron user={user} />
                <Dashboard />
                <Certifications
                  reFetch={this.fetchData}
                  editable={user._id === authorizedUser._id}
                  certifications={user.certifications}
                />
                <Education
                  reFetch={this.fetchData}
                  editable={authorizedUser._id === user._id}
                  educations={user.educations}
                />

                <Experiences
                  reFetch={this.fetchData}
                  editable={user._id === authorizedUser._id}
                  experiences={user.experiences}
                />
                <Accomplishments />
              </Col>
              <SideBar />
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default Profile;
