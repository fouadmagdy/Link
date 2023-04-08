import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSlider } from "../actions/sliderActions";
import ICONS from "../helpers/icons";
import OrangeButton from "./OrangeButton";
import BannerPagination from "./BannerPagination";
import { Container, Row, Col } from "react-bootstrap";
import URLS from "../helpers/urls";

export default function HighlightBanner() {
  const dispatch = useDispatch();
  const sliderList = useSelector((state) => state.sliderList);
  const { loading, sliders } = sliderList;
  const [activeSlide, setActiveSlide] = useState(1);

  const filteredSlide = useMemo(() => {
    if (!sliders || !sliders.length) {
      return;
    }
    return sliders.find((slide) => slide.order === activeSlide);
  }, [activeSlide, sliders]);

  useEffect(() => {
    dispatch(listSlider());
  }, [dispatch]);

  console.log("filteredSlide", filteredSlide);
  return (
    <Container>
      <Row className="highlightBannerContainer mt-5">
        {!loading && filteredSlide && (
          <>
            <Col xs={12} lg={5} className="d-flex flex-column ">
              <div className="highlightBannerContent">
                <h6
                  className="category font-weight-bold"
                  style={{ color: `#${filteredSlide?.colorCode}` }}
                >
                  {filteredSlide?.category}
                </h6>
                <h5 className="title">
                  {filteredSlide?.title}
                  <span>
                    <img
                      className="decore-img img-fluid"
                      src={ICONS[`decore${filteredSlide?.order}`]}
                      alt="decore"
                    />
                  </span>
                </h5>
                <p className="brief">{filteredSlide?.brief}</p>
                <div className="highlightBanner-actions">
                  <OrangeButton
                    content="Find out more"
                    url={filteredSlide?.itemUrl}
                  />
                  <a href={filteredSlide?.videoUrl}>
                    <img
                      src={ICONS.playDemo}
                      alt="play video"
                      className="mx-4 img-fluid"
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <img
                src={`${URLS.iconsBaseUrl}/${filteredSlide?.imgUrl}`}
                className="slider-img img-fluid"
                alt="woman"
              />
              <img
                src={
                  filteredSlide?.order === 1
                    ? ICONS.decoreBG1
                    : filteredSlide?.order === 2
                    ? ICONS.decoreBG2
                    : ICONS.decoreBG3
                }
                className="slider-bg-img img-fluid"
                alt="bg"
              />
            </Col>
          </>
        )}
      </Row>
      <BannerPagination
        slidersInfo={sliders}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </Container>
  );
}
