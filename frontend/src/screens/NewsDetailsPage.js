import React, { useEffect, useState, useCallback } from "react";
import NavBar from "../components/NavBar";
import NewsCards from "../components/NewsCards";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { listCategory } from "../actions/categoryActions";
import { Container, Row, Col } from "react-bootstrap";

export default function NewsDetailsPage({ match }) {
  const dispatch = useDispatch();
  const cardId = match.params.id;
  const [cardDate, setCardDate] = useState(null);

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const getCardDate = useCallback(async () => {
    const { data } = await axios.get(
      `https://api.npoint.io/d275425a434e02acf2f7/News/${cardId}`
    );
    setCardDate(data);
  }, [cardId]);

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  useEffect(() => {
    getCardDate();
  }, [getCardDate]);

  return (
    <>
      <NavBar />
      {cardDate && (
        <Container>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={4} className="news-card-container">
              <NewsCards
                card={cardDate}
                categoriesState={categories?.newsCategory}
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
