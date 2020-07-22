import React from "react";
import { Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { FiStar } from "react-icons/fi";
import { createUseStyles } from "react-jss";
import Paper from "../ui/Paper/Paper";

function Dashboard(props) {
  const useStyles = createUseStyles((theme) => ({
    title: {
      fontSize: "20px",
      fontWeight: "normal",
    },
    text: {
      fontSize: "16px",
      fontWeight: "normal",
    },
    titleBox: {
      color: "blue",
      fontSize: "30px",
      fontWeight: "normal",
    },
    textBox: {
      fontSize: "14px",
      fontWeight: "normal",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Jumbotron>
        {/* <Card> */}
        <Container>
          <Row>
            <Col>
              <Card.Body xs={6} md={6}>
                <Card.Title className={classes.title}>
                  Your Dashboard
                </Card.Title>
                <Card.Text className={classes.text}>
                  <i> Private to you</i>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col xs={6} md={6}>
              <Card.Body className="d-flex flex-row-reverse mt-3 ">
                <Card.Text className={classes.text}>
                  <FiStar className="mb-1 mr-1" /> All Star{" "}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row className="block-example border ml-2 mr-2 mb-2 rounded mb-0">
            <Col className="block-example border-right ">
              {" "}
              <Card.Body>
                <Card.Title className={classes.titleBox}>195</Card.Title>
                <Card.Text className={classes.textBox}>
                  Who viewed your profile
                </Card.Text>
              </Card.Body>
            </Col>
            <Col className="block-example border-right ">
              {" "}
              <Card.Body>
                <Card.Title className={classes.titleBox}>0</Card.Title>
                <Card.Text className={classes.textBox}>Article Views</Card.Text>
              </Card.Body>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title className={classes.titleBox}>55</Card.Title>
                <Card.Text className={classes.textBox}>
                  Search apperances
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <hr className="ml-2 mr-2 " style={{ borderWidth: "medium" }} />
        </Container>
        {/* </Card> */}
      </Jumbotron>
    </div>
  );
}

export default Dashboard;
