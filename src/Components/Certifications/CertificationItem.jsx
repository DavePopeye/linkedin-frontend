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

export default class CertificationItem extends Component {
  state = {
    modalShow: false,
    editing: false,
  };

  render() {
    const { certification } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Col xs={2} className="p-0 ml-3">
              <img fluid src={certification.image} className="imgStyle" />
            </Col>
            <Col xs={7} className="ml-0 pl-0">
              <h6>{certification.name}</h6>
              <p>{certification.organization}</p>
              <p>
                {certification.issueDate} - {certification.expirationDate}
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
              Add licenses & certifications
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.didSubmit}>
            <Modal.Body>
              <Row className="m-2">
                <Form.Label>Name</Form.Label>
                <FormControl value={certification.name} />
              </Row>
              <Row className="m-2">
                <Form.Label>Issuing Organization</Form.Label>
                <FormControl value={certification.organization} />
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
                <FormControl value={certification.credentialId} />
              </Row>
              <Row className="m-2">
                <Form.Label>Credential URL</Form.Label>
                <FormControl value={certification.credentialUrl} />
              </Row>
            </Modal.Body>
          </Form>
          <Modal.Footer>
            <Button
              type="submit"
              variant="outline-primary"
              className="buttonStyle"
            >
              Edit
            </Button>

            <Button
              variant="alert"
              className="buttonStyle"
              onClick={() => this.setState({ modalShow: false })}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
