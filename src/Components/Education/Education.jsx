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

export default class educations extends React.Component {
  state = {
    educations: [],
    modalShow: false,
    selectedCert: {},
    education: {},
  };

  componentDidMount = () => {
    this.fetchEducations();
  };

  fetchEducations = async () => {
    const Authorization = localStorage.getItem("authorization");
    const URL = `https://linkedinbackend.herokuapp.com/users/${
      this.props.id || "me"
    }/educations`;
    let response = await fetch(URL, {
      method: "GET",
      headers: new Headers({
        Authorization,
        "Content-type": "application/json",
      }),
    });
    let json = await response.json();
    console.log(json);
    this.setState({ educations: json.data });
  };
  addNewEducation = async () => {
    const Authorization = localStorage.getItem("authorization");
    const { education } = this.state;

    let res = await fetch("https://linkedinbackend.herokuapp.com/educations", {
      method: "POST",
      body: JSON.stringify(education),
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
    });
  };

  render() {
    const { educations, education } = this.state;
    const { editable } = this.props;
    return (
      <Paper>
        <Row className="d-flex align-items-center m-1 my-3 pt-0">
          <Col xs={6}>
            <h4 className="headerStyle">Educations</h4>
          </Col>
          {editable && (
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
          )}
        </Row>
        {educations.length > 0 && (
          <EducationList
            reFetch={this.fetchEducations}
            educations={this.state.educations}
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
          <Form>
            <Modal.Body>
              <Row className="m-2">
                <Form.Label>School</Form.Label>
                <FormControl
                  name={"school"}
                  onChange={this.handleChange}
                  value={education.school}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Degree</Form.Label>
                <FormControl
                  name={"degree"}
                  onChange={this.handleChange}
                  value={education.degree}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Field of Study</Form.Label>
                <FormControl
                  name={"fieldOfStudy"}
                  onChange={this.handleChange}
                  value={education.fieldOfStudy}
                />
              </Row>

              <Row>
                <Col className="ml-2">
                  <Form.Label>Start Year</Form.Label>
                  <Form.Control
                    name={"startDate"}
                    onChange={this.handleChange}
                    value={education.startDate}
                    type={"date"}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>End Year</Form.Label>
                  <Form.Control
                    name={"endDate"}
                    onChange={this.handleChange}
                    value={education.endDate}
                    type={"date"}
                    defaultValue="Choose..."
                  />
                </Col>
              </Row>
              <Row className="m-2">
                <Form.Label>Grade</Form.Label>
                <FormControl
                  row={3}
                  name={"grade"}
                  onChange={this.handleChange}
                  value={education.grade}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Description</Form.Label>
                <FormControl
                  as={"textarea"}
                  row={3}
                  name={"description"}
                  onChange={this.handleChange}
                  value={education.description}
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
              onClick={() => this.addNewEducation()}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Paper>
    );
  }
}
