import React from "react";

export default function BannerPagination({
  slidersInfo,
  activeSlide,
  setActiveSlide,
  handleClickForAnimation,
}) {
  return (
    <div className="pagination-container">
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
