import React from "react";
import { Col, Image, Row } from "react-bootstrap";

function Person({ image, title, description, roundedCircle }) {
  return (
    <Row>
      <Col xs={2}>
        <Image
          roundedCircle={roundedCircle}
          style={{ width: 50, height: 50 }}
          src={image}
        />
      </Col>
      <Col xs={10}>
        <h6>{title}</h6>
        <p className={"text-muted"} style={{ fontSize: "8pt" }}>
          {description}
        </p>
      </Col>
    </Row>
  );
}

export default Person;
