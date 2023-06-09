import React from "react";
import ICONS from "../helpers/icons";
import { Button, Container, Row } from "react-bootstrap";
export default function ThingsWeDo() {
  return (
    <main className="things-we-do d-flex align-items-center">
      <Container>
        <Row>
          <div className="imagesContainers d-flex align-items-center">
            <div className="img-container first-img">
              <img
                src={ICONS.thingsWeDo1}
                alt="things we do 1"
                className="img-fluid"
              />
              <div className="img-overlay"></div>
              <Button variant="outline-none" className="readMore">
                <img
                  src={ICONS.rightArrow}
                  alt="right arrow"
                  className="img-fluid readMore-arrow"
                />
                Read More
              </Button>
            </div>

            <div className="d-flex flex-column">
              <div className="img-container">
                <img
                  src={ICONS.thingsWeDo2}
                  alt="things we do 2"
                  className="img-fluid"
                />
                <div className="img-overlay"></div>
                <Button variant="outline-none" className="readMore">
                  <img
                    src={ICONS.rightArrow}
                    alt="right arrow"
                    className="img-fluid readMore-arrow"
                  />
                  Read More
                </Button>
              </div>
              <div className="img-container">
                <img
                  src={ICONS.thingsWeDo3}
                  alt="things we do 3"
                  className="img-fluid"
                />
                <div className="img-overlay"></div>
                <Button variant="outline-none" className="readMore">
                  <img
                    src={ICONS.rightArrow}
                    alt="right arrow"
                    className="img-fluid readMore-arrow"
                  />
                  Read More
                </Button>
              </div>
            </div>
            <div className="d-flex flex-column third-col">
              <div className="img-container">
                <img
                  src={ICONS.thingsWeDo4}
                  alt="things we do 4"
                  className="img-fluid"
                />
                <div className="img-overlay"></div>
                <Button variant="outline-none" className="readMore">
                  <img
                    src={ICONS.rightArrow}
                    alt="right arrow"
                    className="img-fluid readMore-arrow"
                  />
                  Read More
                </Button>
              </div>
              <div className="img-container">
                <img
                  src={ICONS.thingsWeDo5}
                  alt="things we do 5"
                  className="img-fluid"
                />
                <div className="img-overlay"></div>
                <Button variant="outline-none" className="readMore">
                  <img
                    src={ICONS.rightArrow}
                    alt="right arrow"
                    className="img-fluid readMore-arrow"
                  />
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <div className="things-we-do-desc d-flex flex-column justify-content-center">
        <h2>
          We Deliver <br></br> Digital Productivity
        </h2>
        <p>
          We craft technology solutions that digitally bond and transform the
          productivity of our customers and their citizens, workers, consumers
          and partners.
        </p>
      </div>
    </main>
  );
}
