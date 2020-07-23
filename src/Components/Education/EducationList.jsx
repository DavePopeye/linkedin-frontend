import React from "react";
import EducationItem from "./EducationItem";
class EducationList extends React.Component {
  render() {
    return (
      <div>
        {this.props.educations.map((education) => (
          <EducationItem reFetch={this.props.reFetch} education={education} />
        ))}
      </div>
    );
  }
}

export default EducationList;
