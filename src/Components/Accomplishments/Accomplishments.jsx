import React from "react";

import { createUseStyles } from "react-jss";
import { Accordion, Card, Col, Container, Row, Table } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";
import LanguageList from "./LanguageList";
import Paper from "../ui/Paper/Paper";

function Accomplishments(props) {
  const useStyles = createUseStyles((theme) => ({
    title: {
      fontSize: "20px",
      fontWeight: "normal",
      margin: "20px 0px",
    },
    text: {
      fontSize: "16px",
      fontWeight: "normal",
    },
    titleBox: {
      fontSize: "30px",
      fontWeight: "normal",
    },
    accTitle: {
      fontSize: "15px",
      fontWeight: "bold",
    },

    textBox: {
      fontSize: "14px",
      fontWeight: "normal",
    },
    icon: {
      fontSize: "20pt",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    icon2: {
      fontSize: "20pt",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
    table: {
      backgroundColor: "#F3F6F8",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Paper>
        <Container>
          <Row>
            <Col className={classes.title}>Accomplishments</Col>
            <Col className={classes.icon} xs={2}></Col>
          </Row>

          <Accordion>
            <Accordion.Toggle
              as={Container}
              eventKey="1"
              style={{ cursor: "pointer" }}
            >
              <Row>
                <Col className={classes.titleBox} xs={1}>
                  3
                </Col>
                <Col className={classes.accTitle}>
                  Languages
                  <LanguageList />
                </Col>
                <Col className={classes.icon2} xs={2}>
                  <BsChevronDown />
                </Col>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Table>
                  <tr>
                    <td>English</td>
                  </tr>
                  <tr>
                    <td>Russian</td>
                  </tr>
                  <tr>
                    <td>Latvian</td>
                  </tr>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </Container>
      </Paper>
    </div>
  );
}

export default Accomplishments;
