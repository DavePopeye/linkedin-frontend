import React from "react";
import { createUseStyles } from "react-jss";
function Paper(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      padding: props.noPadding ? 0 : 20,
      boxShadow: "0px 0px 5px 0px rgba(214,214,214,1)",
      borderRadius: 2,
      marginBottom: "25px",
      width: "100%",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.container} {...props}>
      {props.children}
    </div>
  );
}

export default Paper;
