import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { MdPhotoCamera } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { createUseStyles } from "react-jss";
export default function NewPostForm() {
  const [show, setShow] = useState(false);
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
    textArea: {
      border: "none",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
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
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
