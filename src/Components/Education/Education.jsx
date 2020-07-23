import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Jumbotron,
  Modal,
  Row,
} from "react-bootstrap";
import "./Education.css";
import EducationList from "./EducationList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Paper from "../ui/Paper/Paper";

export default class Education extends Component {
  state = {
    educations: [],
    modalShow: false,
    selectedCert: {},
    eudcation: {},
  };

  componentDidMount = () => {
    this.fetchEducations();
  };

  fetchEducations = async () => {
    const Authorization = localStorage.getItem("authorization");
    let response = await fetch(
      "https://linkedinbackend.herokuapp.com/users/me/education",
      {
        method: "GET",
        headers: new Headers({
          Authorization,
          "Content-type": "application/json",
        }),
      }
    );
    let json = await response.json();
    this.setState({ educations: json.data });
  };
  addNeweducation = async () => {
    const Authorization = localStorage.getItem("authorization");
    const { experience } = this.state;

    let res = await fetch("https://linkedinbackend.herokuapp.com/education", {
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
      this.fetchEducations();
    } else {
      const { message } = await res.json();
      alert(message);
    }
  };
  handleChange = (e) => {
    const { education } = this.state;
    this.setState({
      education: { ...education, [e.target.name]: e.target.value },
    });
  };
  showModal = (cert) => {
    this.setState({
      modalShow: true,
      selectedCert: cert,
    });
  };

  render() {
    const { education, educations } = this.state;
    return (
      <Paper>
        <Row className="d-flex align-items-center m-1 my-3 pt-0">
          <Col xs={6}>
            <h4 className="headerStyle">Education</h4>
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
        {education.length > 0 && (
          <EducationList
            eudcations={this.state.educations}
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
              Add Education
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.didSubmit}>
            <Modal.Body>
              <Row className="m-2">
                <Form.Label>School</Form.Label>
                <FormControl
                  name={"role"}
                  onChange={this.handleChange}
                  value={experience.role}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Degree</Form.Label>
                <FormControl
                  name={"company"}
                  onChange={this.handleChange}
                  value={experience.company}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Field of Study</Form.Label>
                <FormControl
                  name={"company"}
                  onChange={this.handleChange}
                  value={experience.company}
                />
              </Row>

              <Row>
                <Col className="ml-2">
                  <Form.Label>Start Year</Form.Label>
                  <Form.Control
                    name={"startDate"}
                    onChange={this.handleChange}
                    value={experience.startDate}
                    type={"date"}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>End Year</Form.Label>
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
                <Form.Label>Grade</Form.Label>
                <FormControl
                  as={"textarea"}
                  row={3}
                  name={"description"}
                  onChange={this.handleChange}
                  value={experience.description}
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
              onClick={() => this.addNeweducation()}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Paper>
    );
  }
}
