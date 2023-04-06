import React from "react";

export default function BannerPagination({
  slidersInfo,
  activeSlide,
  setActiveSlide,
}) {
  return (
    <div className="pagination-container">
      {slidersInfo
        .sort((a, b) => a.order - b.order)
        .map((slide) => (
          <button
            index={slide.id}
            target="_blank"
            className={`dot${slide.order === activeSlide ? " active" : ""}`}
            onClick={() => setActiveSlide(slide.order)}
            style={{ backgroundColor: `#${slide.colorCode}` }}
          ></button>
        ))}
    </div>
  );
}
