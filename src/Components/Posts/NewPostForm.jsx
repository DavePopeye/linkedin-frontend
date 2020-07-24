import React, { useState } from "react";
import { Button, Col, FormControl, Modal, Row } from "react-bootstrap";
import { MdPhotoCamera } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { createUseStyles } from "react-jss";
import ENDPOINTS from "../../api/endpoints";
import Paper from "../ui/Paper/Paper";
import { BsCameraVideoFill, FaFile, FiEdit } from "react-icons/all";
export default function NewPostForm(props) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const useStyles = createUseStyles(() => ({
    buttons: {
      flex: 0.5,
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    icons: {
      fontSize: "20pt",
    },
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
  const submitPost = async () => {
    const Authorization = localStorage.getItem("authorization");
    const data = new FormData();
    data.append("post", { text });
    let res = await fetch(ENDPOINTS.POSTS, {
      method: "POST",
      headers: {
        Authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    if (res.ok) {
      props.reFetch && props.reFetch();
      handleClose();
    } else {
      props.reFetch && props.reFetch();
      handleClose();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={"Type your post here"}
            as={"textarea"}
            className={classes.textArea}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className={classes.footer}>
            <div className={classes.buttons}>
              <MdPhotoCamera style={{ fontSize: 20, marginRight: "1em" }} />
              <FiVideo style={{ fontSize: 20, marginRight: "1em" }} />
              <GrDocument style={{ fontSize: 16, marginRight: "1em" }} />
            </div>
            <Button
              disabled={text.trim().length === 0}
              variant="primary"
              onClick={() => submitPost()}
            >
              Post
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Paper noPadding>
        <Row>
          <Col onClick={handleShow} xs={6} className={classes.wide}>
            <FiEdit style={{ marginRight: "1em" }} />
            Start a Post
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
    </>
  );
}
