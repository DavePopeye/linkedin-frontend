import React from "react";
import { Spinner } from "react-bootstrap";
import "./style.css";
import { FaLinkedin } from "react-icons/fa";
function Loading(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="animation-container">
        <FaLinkedin
          style={{
            display: "block",
            fontSize: "3.5em",
            textAlign: "center",
            color: "#0077b5",
          }}
        />
        <div className="line">
          <div className="inner"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
