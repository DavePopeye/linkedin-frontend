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
export default class CertificationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      editing: false,
      certification: {},
    };
  }

  componentDidMount() {
    const { certification } = this.props;
    this.setState({ certification });
  }
  handleChange = (e) => {
    const { certification } = this.state;
    this.setState({
      certification: { ...certification, [e.target.name]: e.target.value },
    });
    console.log(e.target.value);
  };
  editCertificate = async () => {
    const { certification } = this.props;
    const Authorization = localStorage.getItem("authorization");
    const res = await fetch(
      `${ENDPOINTS.CERTIFICATIONS}/${certification._id}`,
      {
        method: "PUT",
        body: JSON.stringify(this.state.certification),
        headers: {
          Authorization,
        },
      }
    );
    if (res.ok) {
      alert("updated");
      const { data } = await res.json();
      console.log(data);
      this.setState({ modalShow: false });
    } else {
      alert("not deleted");
    }
  };
  removeCertificate = async () => {
    const { certification } = this.props;
    const Authorization = localStorage.getItem("authorization");
    const res = await fetch(
      `${ENDPOINTS.CERTIFICATIONS}/${certification._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization,
        },
      }
    );
    if (res.ok) {
      alert("deleted");
      this.setState({ modalShow: false });
    } else {
      alert("not deleted");
    }
  };
  render() {
    const { certification } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
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
          <Form>
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
                    value={moment(certification.issueDate).format("YYYY-MM-DD")}
                    type={"date"}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control
                    name={"expirationDate"}
                    onChange={this.handleChange}
                    value={moment(certification.expirationDate).format(
                      "YYYY-MM-DD"
                    )}
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
              onClick={() => this.editCertificate()}
            >
              Edit
            </Button>

            <Button
              variant="alert"
              className="buttonStyle"
              onClick={() => this.removeCertificate()}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
