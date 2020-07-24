import React, { useState } from "react";
import Paper from "../ui/Paper/Paper";
import {
  Accordion,
  Button,
  Card,
  Col,
  FormControl,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { FiMoreHorizontal, FiSend, FiVideo } from "react-icons/fi";
import Person from "../Person/Person";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { MdPhotoCamera } from "react-icons/md";
import { GrDocument } from "react-icons/gr";
import ENDPOINTS from "../../api/endpoints";

function PostItem(props) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState();
  const [src, setSrc] = useState("");
  const [text, setText] = useState(props.post.text || "");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const input = React.createRef();
  const handleFileClick = () => {
    input.current.click();
  };

  const handleFileChange = async (e) => {
    const { files } = e.target;
    const file = files[0];
    if (file.type.includes("image")) {
      encodeImageFileAsURL(file, (src) => {
        setFile(file);
        setSrc(src);
      });
      await putPhoto(src);
    }
  };
  const encodeImageFileAsURL = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const useStyles = createUseStyles((theme) => ({
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
    btn: {
      color: "grey",
      fontSize: "16px",
      border: "none",
      outline: "none !important",
      background: "transparent",
      fontWeight: "500",
      "&:hover": {
        color: "#000",
      },
    },
  }));
  const classes = useStyles();
  const submitPost = async () => {
    const Authorization = localStorage.getItem("authorization");
    const data = new FormData();
    data.append("props.post", { text });
    let res = await fetch(`${ENDPOINTS.POSTS}/${props.post._id}`, {
      method: "PUT",
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
  const putPhoto = async (src) => {
    const formData = new FormData();
    const Authorization = localStorage.getItem("authorization");
    formData.append("photo", file);
    let res = await fetch(`${ENDPOINTS.POSTS}/${props.post._id}/photo`, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization,
      },
    });
    let msg = await res.json();
    console.log(msg);
  };
  const deletePost = async () => {
    const Authorization = localStorage.getItem("authorization");
    const data = new FormData();
    data.append("props.post", { text });
    let res = await fetch(`${ENDPOINTS.POSTS}/${props.post._id}`, {
      method: "DELETE",
      headers: {
        Authorization,
        "Content-Type": "application/json",
      },
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
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={"Type your post here"}
            as={"textarea"}
            className={classes.textArea}
          />
          {src && (
            <Image style={{ objectFit: "cover", width: "100%" }} src={src} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className={classes.footer}>
            <div className={classes.buttons}>
              <input
                ref={input}
                onChange={handleFileChange}
                type={"file"}
                hidden
              />
              <MdPhotoCamera
                onClick={handleFileClick}
                style={{ fontSize: 20, marginRight: "1em" }}
              />
              <FiVideo style={{ fontSize: 20, marginRight: "1em" }} />
              <GrDocument style={{ fontSize: 16, marginRight: "1em" }} />
            </div>
            <div>
              <Button
                style={{ marginRight: "1em" }}
                variant="secondary"
                onClick={() => deletePost()}
              >
                Delete
              </Button>
              <Button
                disabled={text.trim().length === 0}
                variant="primary"
                onClick={() => submitPost()}
              >
                Post
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
      <Paper>
        <Row>
          <Col xs={11}>
            <Link to={`/users/${props.post.createdBy._id}`}>
              <Person
                title={`${props.post.createdBy.name} ${props.post.createdBy.lastName}`}
                image={props.post.createdBy.image}
                description={props.post.createdBy.title}
              />
            </Link>
          </Col>
          {props.user._id === props.post.createdBy._id && (
            <Col onClick={() => handleShow(true)} xs={1}>
              <FiMoreHorizontal />
            </Col>
          )}
        </Row>
        <Row>
          <p style={{ padding: 12 }}>{props.post.text}</p>
        </Row>
        {props.post.image && (
          <Image
            style={{ width: "100%", paddingBottom: 20 }}
            src={props.post.image}
          />
        )}
        <Accordion>
          <Row className={"d-flex align-items-center"}>
            <Col xs={3}>
              <button className={classes.btn}>
                <AiOutlineLike /> Like
              </button>
            </Col>
            <Col xs={3}>
              <Accordion.Toggle
                variant="link"
                eventKey="0"
                className={classes.btn}
              >
                <GoComment />
                Comment
              </Accordion.Toggle>
            </Col>
            <Col xs={3}>
              <button className={classes.btn}>
                <RiShareForwardLine /> Share
              </button>
            </Col>
            <Col xs={3}>
              <button className={classes.btn}>
                <FiSend /> Send
              </button>
            </Col>
          </Row>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <>
                <Row>new comment</Row>
                <div style={{ maxHeight: 400, overflowY: "scroll" }}>
                  comments
                </div>
              </>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </Paper>
    </div>
  );
}

export default PostItem;
