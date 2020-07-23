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
import "./Certifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CertificationList from "./CertificationList";
import Paper from "../ui/Paper/Paper";
import ENDPOINTS from "../../api/endpoints";

/*
 *   Experiences => fetchCertifications
 *       CertificationsList => certifications (as props)
 *       AddNewCertifications fetchCertifications (as props)
 *
 * */
class Certifications extends React.Component {
  state = {
    certifications: [],
    modalShow: false,
    selectedCert: {},
    certification: {},
  };

  componentDidMount = () => {
    this.fetchCertifications();
  };

  fetchCertifications = async () => {
    const Authorization = localStorage.getItem("authorization");
    let response = await fetch(
      "http://localhost:3001/users/me/certifications",
      {
        method: "GET",
        headers: new Headers({
          Authorization,
          "Content-type": "application/json",
        }),
      }
    );
    let json = await response.json();
    this.setState({ certifications: json.data });
  };
  addNewCertification = async () => {
    const Authorization = localStorage.getItem("authorization");
    const { certification } = this.state;
    const certificate = {
      ...certification,
      canExpire: certification.canExpire !== "true",
    };
    let res = await fetch(ENDPOINTS.CERTIFICATIONS, {
      method: "POST",
      body: JSON.stringify(certificate),
      headers: new Headers({
        Authorization,
        "Content-type": "application/json",
      }),
    });
    if (res.ok) {
      const { data } = await res.json();
      this.setState({ modalShow: false });
      this.fetchCertifications();
    } else {
      const { message } = await res.json();
      alert(message);
    }
  };
  handleChange = (e) => {
    const { certification } = this.state;
    this.setState({
      certification: { ...certification, [e.target.name]: e.target.value },
    });
  };
  showModal = (cert) => {
    this.setState({
      modalShow: true,
      selectedCert: cert,
    });
  };

  render() {
    const { certification, certifications } = this.state;
    const { editable } = this.props;
    return (
      <Paper>
        <Row className="d-flex align-items-center m-1 my-3 pt-0">
          <Col xs={6}>
            <h4 className="headerStyle">Licenses & Certifications</h4>
          </Col>
          <Col className="d-flex align-items-end">
          {editable && (
            <FontAwesomeIcon
              className="ml-auto mr-3"
              icon={faPlus}
              size="s"
              color="#0073b1"
              style={{ cursor: "pointer" }}
              onClick={() => this.setState({ modalShow: true })}
            />
          )}
          </Col>
        </Row>
        {certifications && certifications.length > 0 && (
          <CertificationList
            certifications={this.state.certifications}
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
              Add licenses & certifications
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.didSubmit}>
            <Modal.Body>
              <Row className="m-2">
                <Form.Label>Name</Form.Label>
                <FormControl
                  name={"name"}
                  onChange={this.handleChange}
                  value={certification.name}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Issuing Organization</Form.Label>
                <FormControl
                  name={"organization"}
                  onChange={this.handleChange}
                  value={certification.organization}
                />
              </Row>
              <Row className="m-2">
                <Form.Group
                  controlId="formBasicCheckbox"
                  style={{ cursor: "pointer" }}
                >
                  <Form.Group className="m-1" controlId="formBasicCheckbox">
                    <Form.Check
                      name={"canExpire"}
                      onChange={this.handleChange}
                      value={!!certification.canExpire}
                      type="checkbox"
                      label="This credential does not expire"
                    />
                  </Form.Group>
                </Form.Group>
              </Row>
              <Row>
                <Col className="ml-2">
                  <Form.Label>Issue Date</Form.Label>
                  <Form.Control
                    name={"issueDate"}
                    onChange={this.handleChange}
                    value={certification.issueDate}
                    type={"date"}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control
                    name={"expirationDate"}
                    onChange={this.handleChange}
                    value={certification.expirationDate}
                    type={"date"}
                    defaultValue="Choose..."
                  />
                </Col>
              </Row>
              <Row className="m-2">
                <Form.Label>Credential ID</Form.Label>
                <FormControl
                  name={"credentialId"}
                  onChange={this.handleChange}
                  value={certification.credentialId}
                />
              </Row>
              <Row className="m-2">
                <Form.Label>Credential URL</Form.Label>
                <FormControl
                  name={"credentialUrl"}
                  onChange={this.handleChange}
                  value={certification.credentialUrl}
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
              onClick={() => this.addNewCertification()}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Paper>
    );
  }
}

export default Certifications;
