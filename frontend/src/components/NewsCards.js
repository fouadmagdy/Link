import React from "react";
import { cutLongWords, formatDate } from "../helpers/commons";
import { Card } from "react-bootstrap";
import ICONS from "../helpers/icons";

import shareIcon from "../images/share-icon.png";

export default function NewsCards({ card, categoriesState }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={card.urlToImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `${ICONS.noImagePreview}`;
        }}
        alt="Image"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{cutLongWords(card.title, 90)}</Card.Title>
        <div className="card-date d-flex my-2">
          <img
            src={ICONS.calenderIcon}
            className="img-fluid"
            alt="calender icon"
          />
          {formatDate(card.publishedDate)}
        </div>
        <div className="card-category-share-addToFavourite mt-auto d-flex justify-content-between align-items-center">
          <span>
            {categoriesState && categoriesState[+card.categoryID - 1]?.name}
          </span>
          <div>
            <img
              src={ICONS.heartIcon}
              alt="heart icon"
              className="img-fluid mr-3"
            />
            <img src={shareIcon} alt="share icon" className="img-fluid" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
