import React from "react";
import { Col, Image } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import PageViewer from "../PageViewer/PageViewer";
import ENDPOINTS from "../../../api/endpoints";

class SideBar extends React.Component {
  state = {
    data: [],
  };
  componentDidMount = async () => {
    const Authorization = localStorage.getItem("authorization");
    let response = await fetch(ENDPOINTS.USERS, {
      method: "GET",
      headers: new Headers({
        Authorization,
        "Content-type": "application/json",
      }),
    });
    let parsedJson = await response.json();
    this.setState({ data: parsedJson.data });
  };

  render() {
    return (
      <Col className="col-4 sideBar">
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <span>Edit public profile & URL</span>
            <FaQuestionCircle />
          </div>
          <hr className="my-4" />
          <div className="d-flex justify-content-between align-items-center">
            <span>Add profile in another language</span>
            <FaQuestionCircle />
          </div>
        </div>
        <div className="banerContainer">
          <Image
            src="https://blog.academyoflearning.com/wp-content/uploads/2017/09/linkedin-gif.gif"
            style={{ width: 100 + "%" }}
          />
        </div>
        <div className="mt-4">
          <h2>People Also Viewed</h2>
          <ul>
            {this.state.data.map(function (data, i) {
              return <PageViewer data={data} key={i} />;
            })}
          </ul>
        </div>
      </Col>
    );
  }
}

export default SideBar;
