import React from "react";
import ICONS from "../helpers/icons";

export default function BannerPagination({
  slidersInfo,
  activeSlide,
  setActiveSlide,
  handleClickForAnimation,
}) {
  return (
    <div className="pagination-container">
      <img src={ICONS.dots} className="img-fluid dots-img" alt="dots img" />
      {slidersInfo
        .sort((a, b) => b.order - a.order)
        .map((slide, index) => (
          <button
            key={slide.id}
            target="_blank"
            className={`dot${slide.order === activeSlide ? " active" : ""}`}
            onClick={() => {
              setActiveSlide(slide.order);
              handleClickForAnimation();
            }}
            style={{ backgroundColor: `#${slide.colorCode}` }}
          ></button>
        ))}
    </div>
  );
}
