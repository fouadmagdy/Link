import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ICONS from "../helpers/icons";

export default function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <img src={ICONS.linkLogo} className="img-fluid" alt="link logo" />
            <p>
              We make technology produce productive, adaptable and sustainable
              business experiences.
            </p>
          </Col>
          <Col xs={12} md={2}>
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h6>Contact</h6>
            <ul className="list-unstyled">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h6>Media</h6>
            <ul className="list-unstyled">
              <li>News</li>
              <li>Photo</li>
              <li>Video</li>
            </ul>
          </Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Container>
    </footer>
  );
}
