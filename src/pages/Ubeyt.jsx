import React from "react";
import PostItem from "../Components/PostItem/PostItem";
import { Col, Row } from "react-bootstrap";

function Ubeyt(props) {
  return (
    <div>
      <Row>
        <Col xs={3}></Col>
        <Col xs={7}>
          <PostItem />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </div>
  );
}

export default Ubeyt;
