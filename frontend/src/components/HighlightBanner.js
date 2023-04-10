import React, { useEffect, useState, useMemo, useCallback } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSlide, setActiveSlide] = useState(3);

  const handleClickForAnimation = useCallback(() => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, []);

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
    <Container>
      <Row className="highlightBannerContainer mt-5">
        {!loading && filteredSlide && (
          <>
            <Col xs={12} lg={6} className="d-flex flex-column ">
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
                      className={`decore-img img-fluid ${
                        isAnimating ? "shrinkImgAnimation" : ""
                      }`}
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
                      className="m-5 img-fluid"
                    />
                  </a>
                </div>
              </div>
              <BannerPagination
                slidersInfo={sliders}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                handleClickForAnimation={handleClickForAnimation}
              />
            </Col>
            <Col
              xs={12}
              lg={6}
              className={`text-center highlightBannerContainer-right-Content ${
                isAnimating ? "transformImgXAnimation" : ""
              }`}
            >
              <img
                src={`${URLS.iconsBaseUrl}/${filteredSlide?.imgUrl}`}
                className="slider-img"
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
    </Container>
  );
}
