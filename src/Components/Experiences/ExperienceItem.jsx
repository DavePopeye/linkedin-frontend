import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
  Modal,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import ENDPOINTS from "../../api/endpoints";
import moment from "moment";
import Avatar from "../Avatar/Avatar";
class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      editing: false,
      experience: {},
    };
  }

  componentDidMount() {
    const { experience } = this.props;
    this.setState({ experience });
  }
  handleChange = (e) => {
    const { experience } = this.state;
    this.setState({
      experience: { ...experience, [e.target.name]: e.target.value },
    });
    console.log(e.target.value);
  };
  editExperience = async () => {
    const { experience } = this.props;
    const Authorization = localStorage.getItem("authorization");
    const res = await fetch(`${ENDPOINTS.EXPERIENCES}/${experience._id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.experience),
      headers: {
        Authorization,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      this.props.reFetch && this.props.reFetch();
      this.setState({ modalShow: false });
    } else {
    }
  };
  removeExperience = async () => {
    const { experience } = this.props;
    const Authorization = localStorage.getItem("authorization");
    const res = await fetch(`${ENDPOINTS.EXPERIENCES}/${experience._id}`, {
      method: "DELETE",
      headers: {
        Authorization,
      },
    });
    if (res.ok) {
      this.setState({ modalShow: false });
      this.props.reFetch && this.props.reFetch();
    } else {
    }
  };
  render() {
    const { experience } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
        <Container>
          <Row>
            <Col xs={2} className="p-0 ml-3">
              <img
                fluid
                src={experience.image}
                className="imgStyle"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Col>
            <Col xs={7} className="ml-0 pl-0">
              <h6>{experience.company}</h6>
              <p>{experience.role}</p>
              <p>
                {moment(experience.startDate).format("DD/MM/YYYY")} -{" "}
                {moment(experience.endDate).format("DD/MM/YYYY")}
              </p>
            </Col>
            <Col className="d-flex align-items-start">
              <FontAwesomeIcon
                className="ml-auto mr-3"
                icon={faPencilAlt}
                size="s"
                color="#0073b1"
                style={{ cursor: "pointer" }}
                onClick={() => this.setState({ modalShow: true })}
              />
            </Col>
          </Row>
        </Container>
        <Modal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Experience
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={3}>
                <Avatar
                  style={{ width: "100%", objectFit: "cover" }}
                  src={experience.image}
                  updateUrl={`https://linkedinbackend.herokuapp.com/experiences/${experience._id}/photo`}
                />
              </Col>
              <Col xs={9}>
                <Form>
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
                        value={moment(experience.startDate).format(
                          "YYYY-MM-DD"
                        )}
                        type={"date"}
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        name={"endDate"}
                        onChange={this.handleChange}
                        value={moment(experience.endDate).format("YYYY-MM-DD")}
                        type={"date"}
                        defaultValue="Choose..."
                      />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Form.Label>Description</Form.Label>
                    <FormControl
                      name={"description"}
                      as={"textarea"}
                      row={3}
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
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button
              type="submit"
              variant="outline-primary"
              className="buttonStyle"
              onClick={() => this.editExperience()}
            >
              Edit
            </Button>

            <Button
              variant="alert"
              className="buttonStyle"
              onClick={() => this.removeExperience()}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ExperienceItem;
