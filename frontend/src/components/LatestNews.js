import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../actions/categoryActions";
import { newsListCategory } from "../actions/newsListingActions";
import NewsCards from "./NewsCards";

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
      ? news?.News?.sort(
          (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
        )?.slice(0, pageSize)
      : news?.News?.sort(
          (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
        )?.filter((card) => card.categoryID === activeTab.toString());
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
                <h3 className="text-center mb-3 ">No news found</h3>
              )}
              {!loadingNews &&
                filteredCards &&
                filteredCards?.map((card) => (
                  <Col xs={12} md={6} lg={4} index={card.id} className="mb-5">
                    <NewsCards card={card} categoriesState={categoriesState} />
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
