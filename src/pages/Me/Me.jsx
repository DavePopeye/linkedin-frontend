import React from "react";
import ProfilePage from "../../Components/ProfilePage/ProfilePage/ProfilePage"
import { Col, Row } from "react-bootstrap";
import Certifications from "../../Components/Certifications/Certifications";
import Dashboard from "../../Components/Dashboard/Dashboard";

function Me(props) {
  const { user } = props;
  return (
    <>
      <ProfilePage user={user}/>
    </>
  );
}

export default Me;
