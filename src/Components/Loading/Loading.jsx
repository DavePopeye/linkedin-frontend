import React from "react";
import { Spinner } from "react-bootstrap";

function Loading(props) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Spinner animation="grow" />
      <p style={{ marginTop: "1em" }}>Loading</p>
    </div>
  );
}

export default Loading;
