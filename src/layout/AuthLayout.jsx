import React from "react";

function AuthLayout(props) {
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
      {props.children}
    </div>
  );
}

export default AuthLayout;
