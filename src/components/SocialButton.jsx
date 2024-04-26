import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../App.css";

export default function SocialButton(props) {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={3}>
          <a href="https://www.facebook.com">
            <Image src={props.icono1} roundedCircle fluid className="iconos" />
          </a>
        </Col>
        <Col xs={3}>
          <a href="https://github.com/">
            <Image src={props.icono2} roundedCircle fluid className="iconos" />
          </a>
        </Col>
        <Col xs={3}>
          <a href="https://linkedin.com/">
            <Image src={props.icono3} roundedCircle fluid className="iconos" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
