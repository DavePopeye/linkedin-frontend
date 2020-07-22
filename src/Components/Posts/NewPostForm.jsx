import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Button } from "react-bootstrap";
import ENDPOINTS from "../../api/endpoints";

function NewPostForm(props) {
  const useStyles = createUseStyles((theme) => ({
    textArea: {
      border: "none",
      width: "100%",
      fontSize: 18,
      "&:focus": {
        border: "none",
        outline: "none",
      },
      "&:active": {
        border: "none",
        outline: "none",
      },
    },
    iconblue: {
      width: 40,
      height: 40,
      padding: 0,
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "blue",
      fontSize: "18pt",
      border: "none",
      outline: "none !important",
      background: "transparent",
      "&:hover": {
        background: "#e6eef2",
        borderRadius: "40px",
      },
    },
    icon3: {
      color: "grey !important",
      fontSize: "18pt",
      border: "none",
      outline: "none !important",
      background: "transparent",
      "&:hover": {
        background: "#F3F3F3",
        borderRadius: "40px",
      },
    },
  }));
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    focus();
  }, []);
  const focus = () => {
    if (textArea) {
      // focus on mount
      textArea.current.focus();
      // cursor position at the end
      textArea.current.setSelectionRange(text.length, text.length);
    }
  };
  const classes = useStyles();
  const textArea = React.createRef();
  const submitPost = async () => {
    let res = await fetch(ENDPOINTS.POSTS, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("authorization"),
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      props.reFetch && props.reFetch();
      props.closeModal && props.closeModal();
    } else {
      const error = await res.json();
    }
  };
  return (
    <div
      style={{
        marginTop: 25,
        width: "100%",
      }}
    >
      <textarea
        ref={textArea}
        placeholder={"What do you want to talk about ?"}
        className={classes.textArea}
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <div className={"d-flex justify-content-end"}>
          <Button
            disabled={text.trim().length === 0}
            onClick={() => submitPost()}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewPostForm;
