import React from "react";
import { createUseStyles } from "react-jss";
import { BsDot } from "react-icons/bs";

function LanguageList() {
  const useStyles = createUseStyles((theme) => ({
    text: {
      fontSize: "16px",
      fontWeight: "normal",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <p className={classes.text}>
        English <BsDot />
        Russian <BsDot />
        Latvian
      </p>
    </div>
  );
}

export default LanguageList;
