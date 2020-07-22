import React from "react";

import { Col, Row, Jumbotron, Container } from "react-bootstrap";
import CertificationItem from "./CertificationItem";
// <CertfcatıonItem certıfıcatıon={cert/>
class CertificationList extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbotronStyle shadow p-3">
        {this.props.certifications.map((certification) => (
          <CertificationItem certification={certification} />
        ))}
      </Jumbotron>
    );
  }
}

export default CertificationList;
