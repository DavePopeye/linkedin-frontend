import React from "react";
import { Button, Col, Form, FormControl, Modal, Row } from "react-bootstrap";
import "./Experiences.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ExperiencesList from "./ExperiencesList";
import Paper from "../ui/Paper/Paper";

/*
 *   Experiences => fetchexperiences
 *       experiencesList => experiences (as props)
 *       AddNewexperiences fetchexperiences (as props)
 *
 * */
class Experiences extends React.Component {
  state = {
    experiences: [],
    modalShow: false,
    selectedCert: {},
    experience: {},
  };

  componentDidMount = () => {
    this.fetchexperiences();
  };

  fetchexperiences = async () => {
    const Authorization = localStorage.getItem("authorization");
    let response = await fetch(
      "https://linkedinbackend.herokuapp.com/users/me/experiences",
      {
        method: "GET",
        headers: new Headers({
          Authorization,
          "Content-type": "application/json",
        }),
      }
    );
    let json = await response.json();
    this.setState({ experiences: json.data });
  };
  addNewexperience = async () => {
    const Authorization = localStorage.getItem("authorization");
    const { experience } = this.state;

    let res = await fetch("https://linkedinbackend.herokuapp.com/experiences", {
      method: "POST",
      body: JSON.stringify(experience),
      headers: new Headers({
        Authorization,
        "Content-type": "application/json",
      }),
    });
    if (res.ok) {
      const { data } = await res.json();
      this.setState({ modalShow: false });
      this.fetchexperiences();
    } else {
      const { message } = await res.json();
      alert(message);
    }
  };
  handleChange = (e) => {
    const { experience } = this.state;
    this.setState({
      experience: { ...experience, [e.target.name]: e.target.value },
    });
  };
  showModal = (cert) => {
    this.setState({
      modalShow: true,
      selectedCert: cert,
    });
  };

  render() {
    const { experience, experiences } = this.state;
    return (
      <Paper>
        <Row className="d-flex align-items-center m-1 my-3 pt-0">
          <Col xs={6}>
            <h4 className="headerStyle">Experiences</h4>
          </Col>
          <Col className="d-flex align-items-end">
            <FontAwesomeIcon
              className="ml-auto mr-3"
              icon={faPlus}
              size="s"
              color="#0073b1"
              style={{ cursor: "pointer" }}
              onClick={() => this.setState({ modalShow: true })}
            />
          </Col>
        </Row>
        {experiences && experiences.length > 0 && (
          <ExperiencesList
            experiences={this.state.experiences}
            modalShow={this.state.modalShow}
          />
        )}

        <Modal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Experience
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.didSubmit}>
            <Modal.Body>
              <Row className="m-2">
                <Form.Label>Role</Form.Label>
                <FormControl
                  name={"role"}
                  onChange={this.handleChange}
                  value={experience.role}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Company</Form.Label>
                <FormControl
                  name={"company"}
                  onChange={this.handleChange}
                  value={experience.company}
                />
              </Row>

              <Row>
                <Col className="ml-2">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    name={"startDate"}
                    onChange={this.handleChange}
                    value={experience.startDate}
                    type={"date"}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    name={"endDate"}
                    onChange={this.handleChange}
                    value={experience.endDate}
                    type={"date"}
                    defaultValue="Choose..."
                  />
                </Col>
              </Row>
              <Row className="m-2">
                <Form.Label>Description</Form.Label>
                <FormControl
                  as={"textarea"}
                  row={3}
                  name={"description"}
                  onChange={this.handleChange}
                  value={experience.description}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Area</Form.Label>
                <FormControl
                  name={"area"}
                  onChange={this.handleChange}
                  value={experience.area}
                />
              </Row>
            </Modal.Body>
          </Form>
          <Modal.Footer>
            <Button
              type="submit"
              variant="outline-primary"
              className="buttonStyle"
              onClick={() => this.setState({ modalShow: false })}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              className="buttonStyle"
              onClick={() => this.addNewexperience()}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Paper>
    );
  }
}

export default Experiences;
