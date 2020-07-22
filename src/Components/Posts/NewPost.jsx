import React, { useState } from "react";
import Paper from "../ui/Paper/Paper";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { MdPhotoCamera } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { FiEdit } from "react-icons/fi";
import NewPostForm from "./NewPostForm";
function NewPost(props) {
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Modal.Body></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
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
