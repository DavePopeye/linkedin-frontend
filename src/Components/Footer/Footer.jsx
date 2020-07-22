import React from "react";
import {
  Col,
  Container,
  Dropdown,
  Dropdown as DropDown,
  FormControl,
  Image,
  Row,
} from "react-bootstrap";

import { FaRegQuestionCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { createUseStyles } from "react-jss";
import { column1, column2, column3 } from "../../constants/footer";
import languages from "../../constants/languages";

function Footer(props) {
  const useStyles = createUseStyles((theme) => ({
    a: {
      fontSize: "0.9rem",
      lineHeight: "2",
      color: "grey",
      fontWeight: "600",
      listStyle: "none",
      textDecoration: "none",
      "&:hover": { color: "#0073b1" },
    },

    p: {
      fontSize: "0.9rem",
      lineHeight: "2",
      color: "grey",
      fontWeight: "600",
    },

    i: {
      fontSize: "1.2rem",
      lineHeight: "2",
      color: "#0073b1",
      fontWeight: "600",
    },
    toggle: {
      border: "3px solid #0073b1",
      padding: 5,
      cursor: "pointer",
    },
  }));

  const classes = useStyles();
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      className={classes.toggle}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      English US
    </div>
  ));
  return (
    <Container>
      <hr></hr>
      <Row className="ml-0">
        <Image
          style={{ width: 100, margin: "20px 0px" }}
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
        />
      </Row>
      <Row className="ml-0">
        <Col md={2} className={classes.a}>
          {column1.map((link) => (
            <Row>
              <a href="#" className={classes.a}>
                {link.label}
              </a>
            </Row>
          ))}
        </Col>

        <Col md={2} className={classes.a}>
          {column2.map((link) => (
            <Row>
              <a href="#" className={classes.a}>
                {link.label}
              </a>
            </Row>
          ))}
        </Col>

        <Col md={2} className={classes.a}>
          {column3.map((link) => (
            <Row>
              <a href="#" className={classes.a}>
                {link.label}
              </a>
            </Row>
          ))}
        </Col>

        <Col md={3}>
          <div>
            <h6 className="mb-0">
              <FaRegQuestionCircle className={classes.i} />
              <a href="#"> Questions</a>
            </h6>
            <p className={classes.a}>Visit our Help Center.</p>
          </div>

          <div className={classes.a}>
            <h6 className="mb-0">
              <FiSettings className={classes.i} />
              <a href="#" className="ml-2">
                Manage your account and privacy
              </a>
            </h6>
            <p>Go to your Settings.</p>
          </div>
        </Col>

        <Col md={3}>
          <div>
            <FormControl defaultValue={"en"} as={"select"}>
              {languages.map((code) => (
                <option>{code.name.slice(0, 12)}</option>
              ))}
            </FormControl>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
