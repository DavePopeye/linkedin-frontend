import React from "react";
import { Col, Row } from "react-bootstrap";
import Certifications from "../../Components/Certifications/Certifications";

function Me(props) {
  return (
    <>
      <Row>
        <Col xs={8}>
          <Certifications />
        </Col>
        <Col xs={4}></Col>
      </Row>
    </>
  );
}

export default Me;
