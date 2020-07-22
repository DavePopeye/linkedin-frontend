import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Jumbotron,
  Modal,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Certifications.css";

import Link from "../../Images/linkedin.png";
/*
 *   Certifications => fetchCertifications
 *       CertificationsList => certifications (as props)
 *       AddNewCertifications fetchCertifications (as props)
 *
 * */
class Certifications extends React.Component {
  state = {
    modalShown: false,
  };
  render() {
    return (
      <>
        <Modal
          show={this.state.modalShown}
          onHide={() => this.setState({ modalShown: false })}
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
                <FormControl />
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
              onClick={() => this.setState({ modalShown: false })}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <Jumbotron fluid className="jumbotronStyle shadow p-3">
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
                onClick={() => {
                  this.setState({
                    modalShown: true,
                  });
                }}
              />
            </Col>
          </Row>

          <Container>
            <Row>
              <Col xs={2} className="p-0 ml-3">
                <img fluid src={Link} className="imgStyle" />
              </Col>
              <Col xs={8} className="ml-0 pl-0">
                <h6>Learning React.js(2019)</h6>
                <p>Linkedin</p>
                <p>Issued Jun 2020 - No Expiration Date</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Certifications;
