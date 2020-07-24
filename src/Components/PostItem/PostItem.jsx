import React from "react";
import Paper from "../ui/Paper/Paper";
import { Accordion, Card, Col, Image, Row } from "react-bootstrap";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import Person from "../Person/Person";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { createUseStyles } from "react-jss";
import Coments from "../Coments/Coments"

function PostItem({ post }) {

  const useStyles = createUseStyles((theme) => ({
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
    

  return (
    <div>
      <Paper>
        <Row>
          <Col xs={11}>
            <Person
              title={`${post.createdBy.name} ${post.createdBy.lastName}`}
              image={post.createdBy.image}
              description={post.createdBy.title}
            />
          </Col>
          <Col xs={1}>
            <FiMoreHorizontal />
          </Col>
        </Row>
        <Row>
          <p style={{ padding: 12 }}>{post.text}</p>
        </Row>
        {post.image && (
          <Image
            style={{ width: "100%", paddingBottom: 20 }}
            src={post.image}
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
            {/* {this.state.data.map(function (data, i) {
              return <Coments comments={post.comments} key={i} />;
            })} */}
              <Coments comments={post.comments} />
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </Paper>
    </div>
  );
}

export default PostItem;
