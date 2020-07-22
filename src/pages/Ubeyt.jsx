import React from "react";
import PostItem from "../Components/PostItem/PostItem";
import { Col, Row } from "react-bootstrap";
import Avatar from "../Components/Avatar/Avatar";

function Ubeyt(props) {
  return (
    <div>
      <Avatar
        style={{ width: 50, height: 50 }}
        src={"https://ca.slack-edge.com/TJNQP8XCG-UUB5AM4E9-171191933c92-512"}
        roundedCircle
        updateUrl="https://linkedinbackend.herokuapp.com/users/5f15f104f5df7f002473f3d7/photo"
      />
    </div>
  );
}

export default Ubeyt;
