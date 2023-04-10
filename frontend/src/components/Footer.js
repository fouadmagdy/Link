import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ICONS from "../helpers/icons";
import fbIcon from "../images/social1.png";
import instagramIcon from "../images/social2.png";
import twitterIcon from "../images/social3.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <img
              src={ICONS.linkLogo}
              className="img-fluid mb-4 footer-container-logo"
              alt="link logo"
            />
            <p className="footer-desc">
              We make technology produce productive, adaptable and sustainable
              business experiences.
            </p>
          </Col>
          <Col xs={12} md={2}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h5>Media</h5>
            <ul className="list-unstyled">
              <li>News</li>
              <li>Photo</li>
              <li>Video</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <div className="socialMedia-navs">
              <ul class="list-unstyled">
                <li class="d-inline">
                  <img src={fbIcon} className="img-fluid" alt="facebook icon" />
                </li>
                <li class="d-inline">
                  <img
                    src={instagramIcon}
                    className="img-fluid"
                    alt="instagram icon"
                  />
                </li>
                <li class="d-inline">
                  <img
                    src={twitterIcon}
                    className="img-fluid"
                    alt="twitter icon"
                  />
                </li>
              </ul>
            </div>
            <div className="discover-our-app">
              <p>Discover our app</p>
              <ul className="list-unstyled">
                <li class="d-inline">
                  <img
                    src={ICONS.playstore}
                    className="img-fluid"
                    alt="play store"
                  />
                </li>
                <li class="d-inline">
                  <img
                    src={ICONS.googlePlay}
                    className="img-fluid"
                    alt="google play"
                  />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
