import React, { useEffect, useState } from "react";
import Paper from "../ui/Paper/Paper";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { MdPhotoCamera } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { FiEdit } from "react-icons/fi";
import ENDPOINTS from "../../api/endpoints";

function NewPost(props) {
  useEffect(() => {
    // focus();
  }, []);
  const focus = () => {
    if (textArea) {
      // focus on mount
      textArea.current.focus();
      // cursor position at the end
      textArea.current.setSelectionRange(text.length, text.length);
    }
  };
  const textArea = React.createRef();
  const useStyles = createUseStyles((theme) => ({
    card: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      width: "100%",
      borderLeft: "1px solid lightgrey",
      minHeight: 80,
      color: "#283e4a",
    },
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
    wide: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      width: "100%",
      minHeight: 80,
    },
  }));
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      setShow(false);
    } else {
      const error = await res.json();
    }
  };

  return (
    <Paper noPadding>
      <Row>
        <Col onClick={handleShow} xs={6} className={classes.wide}>
          <FiEdit style={{ marginRight: "1em" }} />
          Start a Post
          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => submitPost()}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </Col>
        <Col xs={2} className={classes.card}>
          <MdPhotoCamera />
        </Col>
        <Col xs={2} className={classes.card}>
          <BsCameraVideoFill />
        </Col>
        <Col xs={2} className={classes.card}>
          <FaFile />
        </Col>
      </Row>
    </Paper>
  );
}

export default NewPost;
