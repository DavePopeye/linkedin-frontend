import React from "react";

import { Jumbotron } from "react-bootstrap";
import ExperienceItem from "./ExperienceItem";

// <CertfcatıonItem certıfıcatıon={cert/>
class ExperiencesList extends React.Component {
  render() {
    return (
      <div>
        {this.props.experiences.map((experience) => (
          <ExperienceItem
            reFetch={this.props.reFetch}
            experience={experience}
          />
        ))}
      </div>
    );
  }
}

export default ExperiencesList;
