import React from "react";
import EducationItem from "./EducationItem";

// <CertfcatıonItem certıfıcatıon={cert/>
class EducationList extends React.Component {
  render() {
    return (
      <div>
        {this.props.education.map((education) => (
          <EducationItem certification={education} />
        ))}
      </div>
    );
  }
}

export default EducationList;
