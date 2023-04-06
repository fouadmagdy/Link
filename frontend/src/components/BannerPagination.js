import React from "react";

export default function BannerPagination({ slidersInfo, setActiveSlide }) {
  return (
    <div className="pagination-container">
      {slidersInfo
        .sort((a, b) => a.order - b.order)
        .map((slide) => (
          <button
            target="_blank"
            className="dot"
            onClick={() => setActiveSlide(slide.order)}
            style={{ backgroundColor: `#${slide.colorCode}` }}
          ></button>
        ))}
    </div>
  );
}
