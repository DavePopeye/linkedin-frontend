import React from "react";
import { Col, Row } from "react-bootstrap";
import Certifications from "../../Components/Certifications/Certifications";
import Dashboard from "../../Components/Dashboard/Dashboard";

function Me(props) {
  const { user } = props;
  return (
    <>
      <a href={`https://linkedinbackend.herokuapp.com/users/${user._id}/cv`}>
        GET CV
      </a>
    </>
  );
}

export default Me;
