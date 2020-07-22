import React from "react";

import { Jumbotron } from "react-bootstrap";
import ExperienceItem from "./ExperienceItem";

// <CertfcatıonItem certıfıcatıon={cert/>
class ExperiencesList extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbotronStyle shadow p-3">
        {this.props.experiences.map((experience) => (
          <ExperienceItem experience={experience} />
        ))}
      </Jumbotron>
    );
  }
}

export default ExperiencesList;
