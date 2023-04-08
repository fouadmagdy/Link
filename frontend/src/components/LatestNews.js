import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../actions/categoryActions";
import { newsListCategory } from "../actions/newsListingActions";
import ICONS from "../helpers/icons";
import { cutLongWords } from "../helpers/commons";

export default function LatestNews() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const newsList = useSelector((state) => state.newsList);
  const { loading: loadingCategories, categories } = categoryList;
  const { loading: loadingNews, news } = newsList;

  const [categoriesState, setCategoriesState] = useState([]);
  const [pageSize, setPageSize] = useState(6);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);

  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const filteredCards = useMemo(() => {
    return activeTab === "all"
      ? news?.News?.slice(0, pageSize)
      : news?.News?.filter((card) => card.categoryID === activeTab.toString());
  }, [activeTab, news?.News, pageSize]);

  const incPageSize = useCallback(() => {
    setShowLoadMoreBtn(false);
    setPageSize((prevState) => prevState + news?.News?.length);
  }, [news]);

  useEffect(() => {
    dispatch(listCategory());
    dispatch(newsListCategory());
  }, [dispatch]);

  useEffect(() => {
    setCategoriesState(categories?.newsCategory);
  }, [categories]);

  return (
    <main className="latestNews-container">
      <Container>
        <Row>
          <h6 className="text-center my-3">Media</h6>
          <h2 className="text-center font-weight-bold mb-3">Top News</h2>
          <Nav
            activeKey={activeTab}
            onSelect={handleTabClick}
            className="justify-content-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="all">All news</Nav.Link>
            </Nav.Item>
            {!loadingCategories &&
              categoriesState &&
              categoriesState?.map((cat) => (
                <Nav.Item index={cat.id}>
                  <Nav.Link eventKey={cat.id}>{cat.name}</Nav.Link>
                </Nav.Item>
              ))}
          </Nav>

          <div className="card-container my-5">
            <Row>
              {!loadingNews && filteredCards && filteredCards?.length === 0 && (
                <h4 className="text-center">No news found</h4>
              )}
              {!loadingNews &&
                filteredCards &&
                filteredCards?.map((card) => (
                  <Col xs={12} md={6} lg={4} index={card.id} className="mb-3">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={card.urlToImage}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `${ICONS.noImagePreview}`;
                        }}
                        height={220}
                        alt="Image"
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{cutLongWords(card.title, 100)}</Card.Title>
                        <div className="card-date d-flex my-2">
                          <i class="fa-light fa-calendar"></i>
                          Wed 12 Aug 2022
                        </div>
                        <div className="card-category-share-addToFavourite mt-auto">
                          <span>
                            {categoriesState &&
                              categoriesState[+card.categoryID - 1]?.name}
                          </span>
                          <div>
                            <i class="fa-light fa-heart"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              {showLoadMoreBtn && (
                <div className="text-center">
                  <Button className="orange-btn" onClick={incPageSize}>
                    View all News
                  </Button>
                </div>
              )}
            </Row>
          </div>
        </Row>
      </Container>
    </main>
  );
}
