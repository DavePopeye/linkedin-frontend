import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import MiniProfileLoader from "./MiniProfileLoader";
import { withRouter } from "react-router-dom";
import Paper from "../ui/Paper/Paper";
function MiniProfile(props) {
  const useStyles = createUseStyles((theme) => ({
    title: {
      color: "#000",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: "65px",
    },
    text: {
      fontSize: "14px",
      fontWeight: "normal",
      color: "blue",
      marginTop: "0px",
      lineHeight: "40%",
    },
    profilePhoto: {
      borderRadius: "50%",
      border: "3px solid white",
      width: "40%",
      position: "absolute",
      margin: " 15% 30% ",
      marginTop: "35px",
    },
  }));
  const classes = useStyles();
  const { loading } = props;
  if (loading) {
    return <MiniProfileLoader />;
  } else {
    return (
      <div>
        <Paper noPadding>
          <Card>
            <Card.Img
              style={{
                backgroundColor: "#C6B273",
                paddingTop: "5px",
                height: "95px",
              }}
              variant="top"
              src={props.user.cover}
            />
            <Card.Img
              onClick={() => props.history.push("/me")}
              className={classes.profilePhoto}
              variant="top"
              src={props.user.image}
            />
            <Container
              onClick={() => props.history.push("/me")}
              className="text-center border-bottom"
            >
              <Card.Body>
                <Card.Title className={classes.title}>
                  {" "}
                  Welcome,{props.user.name}!
                </Card.Title>
                <Card.Text className={classes.text}>
                  <a href="#"> Update your profile</a>
                </Card.Text>
              </Card.Body>
            </Container>

            <div style={{ padding: 8 }}>
              <Row className="mt-2  text-left">
                <Col
                  className={"text-muted"}
                  style={{ fontSize: "8pt" }}
                  xs={9}
                >
                  Connections
                  <p>
                    <strong>Grow your network</strong>
                  </p>
                </Col>
                <Col style={{ fontSize: "8pt", color: "blue" }} xs={3}>
                  75
                </Col>
              </Row>
              <Row className="mt-2  text-left">
                <Col
                  className={"text-muted"}
                  style={{ fontSize: "8pt" }}
                  xs={9}
                >
                  Who viewed your profile
                </Col>
                <Col style={{ fontSize: "8pt", color: "blue" }} xs={3}>
                  165
                </Col>
              </Row>
            </div>
          </Card>
        </Paper>
      </div>
    );
  }
}
export default withRouter(MiniProfile);
