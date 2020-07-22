import React from "react";
import MiniProfile from "../../Components/MiniProfile/MiniProfile";
import { Col, Row } from "react-bootstrap";
import NewPost from "../../Components/Posts/NewPost";

function Feed(props) {
  return (
    <>
      <Row>
        <Col xs={3}>
          <MiniProfile user={props.user} />
        </Col>
        <Col xs={7}>
          <NewPost />
        </Col>
        <Col xs={2}></Col>
      </Row>
    </>
  );
}

export default Feed;
