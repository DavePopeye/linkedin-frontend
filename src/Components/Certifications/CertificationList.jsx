import React from "react";

import { Col, Row, Jumbotron, Container } from "react-bootstrap";
import CertificationItem from "./CertificationItem";
// <CertfcatıonItem certıfıcatıon={cert/>
class CertificationList extends React.Component {
  render() {
    return (
      <div>
        {this.props.certifications.map((certification) => (
          <CertificationItem certification={certification} />
        ))}
      </div>
    );
  }
}

export default CertificationList;
