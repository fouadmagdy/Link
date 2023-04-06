import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSlider } from "../actions/sliderActions";
import ICONS from "../helpers/icons";
import OrangeButton from "./OrangeButton";
import BannerPagination from "./BannerPagination";
import { Row, Col } from "react-bootstrap";

export default function HighlightBanner() {
  const dispatch = useDispatch();
  const sliderList = useSelector((state) => state.sliderList);
  const { loading, sliders } = sliderList;
  console.log("sliders", sliders);

  useEffect(() => {
    dispatch(listSlider());
  }, [dispatch]);

  return (
    <Row className="highlightBannerContainer mt-5">
      <Col lg={6}>
        <h6 className="category font-weight-bold">Marking</h6>
        <h5 className="title">
          25 Years of Bussiness growth
          <span>
            <img className="decore-img" src={ICONS.decore} alt="decore" />
          </span>
        </h5>
        <p className="brief">
          Link Development, the global technology solutions provider and an A15
          company, unveiled today that it has recently marked its Silver Jubilee
          anniversary.
        </p>
        <div>
          <OrangeButton content="Find out more" />
          <img src={ICONS.playDemo} alt="play video" className="mx-4" />
        </div>
      </Col>
      <Col lg={6}>
        <img src={ICONS.slider1} className="slider-img" alt="woman" />
      </Col>

      <BannerPagination />
    </Row>
  );
}
