import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSlider } from "../actions/sliderActions";
import ICONS from "../helpers/icons";
import OrangeButton from "./OrangeButton";
import BannerPagination from "./BannerPagination";
import { Row, Col } from "react-bootstrap";
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

  return (
    <>
      <Row className="highlightBannerContainer mt-5">
        {!loading && filteredSlide && (
          <>
            <Col lg={5}>
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
                    className="decore-img"
                    src={ICONS[`decore${filteredSlide?.order}`]}
                    alt="decore"
                  />
                </span>
              </h5>
              <p className="brief">{filteredSlide?.brief}</p>
              <div>
                <OrangeButton
                  content="Find out more"
                  url={filteredSlide?.itemUrl}
                />
                <img src={ICONS.playDemo} alt="play video" className="mx-4" />
              </div>
            </Col>
            <Col lg={7}>
              <img
                src={`${URLS.iconsBaseUrl}/${filteredSlide?.imgUrl}`}
                className="slider-img"
                alt="woman"
              />
            </Col>
          </>
        )}
      </Row>
      <Row>
        <BannerPagination
          slidersInfo={sliders}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </Row>
    </>
  );
}
