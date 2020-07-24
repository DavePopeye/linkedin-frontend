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

class EducationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      editing: false,
      education: {},
    };
  }

  componentDidMount() {
    const { education } = this.props;
    this.setState({ education });
  }

  handleChange = (e) => {
    const { education } = this.state;
    this.setState({
      education: { ...education, [e.target.name]: e.target.value },
    });
    console.log(e.target.value);
  };

  editEducation = async () => {
    const { education } = this.props;
    const Authorization = localStorage.getItem("authorization");
    const res = await fetch(`${ENDPOINTS.EDUCATIONS}/${education._id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.education),
      headers: {
        Authorization,
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      this.props.reFetch && this.props.reFetch();
      this.setState({ modalShow: false });
    } else {
      const msg = await res.json();
      console.log(msg);
    }
  };
  removeEducation = async () => {
    const { education } = this.props;
    const Authorization = localStorage.getItem("authorization");
    const res = await fetch(`${ENDPOINTS.EDUCATIONS}/${education._id}`, {
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
    const { education } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
        <Container>
          <Row>
            <Col xs={2} className="p-0 ml-3">
              <img
                fluid
                src={education.image}
                className="imgStyle"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Col>
            <Col xs={7} className="ml-0 pl-0">
              <h6>{education.school}</h6>
              <p>{education.fieldOfStudy}</p>
              <p>
                {moment(education.startDate).format("DD/MM/YYYY")} -{" "}
                {moment(education.endDate).format("DD/MM/YYYY")}
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
              Edit Education
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={3}>
                <Avatar
                  style={{ width: "100%", objectFit: "cover" }}
                  src={education.image}
                  updateUrl={`https://linkedinbackend.herokuapp.com/educations/${education._id}/photo`}
                />
              </Col>
              <Col xs={9}>
                <Form>
                  <Row className="m-2">
                    <Form.Label>School</Form.Label>
                    <FormControl
                      name={"school"}
                      onChange={this.handleChange}
                      value={education.school}
                    />
                  </Row>
                  <Row className="m-2">
                    <Form.Label>Field Of Study</Form.Label>
                    <FormControl
                      name={"fieldOfStudy"}
                      onChange={this.handleChange}
                      value={education.fieldOfStudy}
                    />
                  </Row>
                  <Row>
                    <Col className="ml-2">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        name={"startDate"}
                        onChange={this.handleChange}
                        value={moment(education.startDate).format("YYYY-MM-DD")}
                        type={"date"}
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        name={"endDate"}
                        onChange={this.handleChange}
                        value={moment(education.endDate).format("YYYY-MM-DD")}
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
                      value={education.description}
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
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button
              type="submit"
              variant="outline-primary"
              className="buttonStyle"
              onClick={() => this.editEducation()}
            >
              Edit
            </Button>

            <Button
              variant="alert"
              className="buttonStyle"
              onClick={() => this.removeEducation()}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EducationItem;
