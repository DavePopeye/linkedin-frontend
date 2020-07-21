import React from "react";
import {
  Jumbotron,
  Container,
  Modal,
  Button,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Certifications.css";
import Link from "../../Images/link.jpg";

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
                <Form.Group className="m-1" controlId="formBasicCheckbox">
                  <Form.Check
                    className="m-1"
                    type="checkbox"
                    label="This credential does not expire"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Col className="ml-2">
                  <Form.Label>Issue Date</Form.Label>
                  <Form.Control as="select" defaultValue="Month">
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Year</option>
                    <option>...</option>
                  </Form.Control>
                </Col>
                <Col className="mr-2">
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>

                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Year</option>
                    <option>...</option>
                  </Form.Control>
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
          </Form>
        </Modal>

        <Jumbotron fluid className="style shadow p-3">
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
