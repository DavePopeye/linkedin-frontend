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

/*
 *   Certifications => fetchCertifications
 *       CertificationsList => certifications (as props)
 *       AddNewCertifications fetchCertifications (as props)
 *
 * */
class Certifications extends React.Component {
  state = {
    certifications: [],
    modalShow: false,
    selectedCert: {},
  };

  componentDidMount = () => {
    this.fetchCertifications();
  };

  fetchCertifications = async () => {
    let response = await fetch(
      "https://linkedinbackend.herokuapp.com/users/me/certifications",
      {
        method: "GET",
        headers: new Headers({
          Authorization: "Basic ZGF2aWRlcGFwYUBnbWFpbC5jb206YXV0aDE5ODg=",
          "Content-type": "application/json",
        }),
      }
    );
    let json = await response.json();
    this.setState({ certifications: json.data });
  };

  showModal = (cert) => {
    this.setState({
      modalShow: true,
      selectedCert: cert,
    });
  };

  render() {
    return (
      <>
        <Row className="d-flex align-items-center m-1 my-3 pt-0">
          <Col xs={6}>
            <h4 className="headerStyle">Licenses & Certifications</h4>
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
        <CertificationList
          certifications={this.state.certifications}
          modalShow={this.state.modalShow}
        />

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
                <FormControl value={this.state.selectedCert.name} />
              </Row>
              <Row className="m-2">
                <Form.Label>Issuing Organization</Form.Label>
                <FormControl />
              </Row>
              <Row className="m-2">
                <Form.Group
                  controlId="formBasicCheckbox"
                  style={{ cursor: "pointer" }}
                >
                  <Form.Group className="m-1" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="This credential does not expire"
                    />
                  </Form.Group>
                </Form.Group>
              </Row>
              <Row>
                <Col className="ml-2">
                  <Form.Label>Issue Date</Form.Label>
                  <Form.Control type={"date"} />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control type={"date"} defaultValue="Choose..." />
                </Col>
              </Row>
              <Row className="m-2">
                <Form.Label>Credential ID</Form.Label>
                <FormControl />
              </Row>
              <Row className="m-2">
                <Form.Label>Credential URL</Form.Label>
                <FormControl />
              </Row>
            </Modal.Body>
          </Form>
          <Modal.Footer>
            <Button
              type="submit"
              variant="outline-primary"
              className="buttonStyle"
            >
              Save and add another
            </Button>

            <Button
              variant="primary"
              className="buttonStyle"
              onClick={() => this.setState({ modalShow: false })}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Certifications;
