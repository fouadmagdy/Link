import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../actions/categoryActions";
const cards = [
  {
    id: "1",
    title: "A15 invests millions in Egypt’s R2S Logistics",
    content:
      "A15 entrepreneurial company announced it has invested millions of pounds in the leading R2S Logistics in Egypt, thereby enabling further growth and expansion of the e-commerce delivery field in Egypt.\r\n\r\nThis investment is made for R2S Pre-Series A Round financing. R2S platform supports several e-commerce platforms through integrated logistical services including shipping, parcel delivery, receiving points, payment collection solutions, return and exchange management, warehouse management and fulfilment, as well as international shipping services to Egyptian merchants and startups.\r\n\r\nA15 said that R2S is adopting a distinct business model by becoming an Asset Light Business Model by expanding the geographical area of its services to cover all parts of the Republic through 11 shipping centres, in addition to more centres that will open soon.\r\n\r\nThe annual R2S transaction volume and income growth also witnessed a noticeable boom, as the numbers showed 125% and 150% growth in turnover and income respectively.\r\n\r\nR2S, an innovative e-commerce logistics company, recently launched the R2S Plus platform, which connects a network of stores to e-commerce sites, to give customers more control over their shipping and delivery experience by enabling them to choose the closest receiving location, the best timing, and the payment method that suits them to receive their parcel.\r\n\r\nAbout 30% of online orders fail to reach their owners the first time, so the R2S success rate in delivering shipments is exceptional as it reaches 93%, which encouraged users to make more orders again with 75% of all users.\r\n\r\nOn the other hand, R2S Plus retailers benefit from winning new or recurring customers as this increases the number of customers visiting their stores.\\n\\r\r\n\r\nR2S aims to expand its network of stores to 600 stores across the country before November 2020.\r\nEgypt and the Arab Gulf countries represent 80% of the volume of the e-commerce market in the MENA region, and this market continues to grow in sales by 30% annually and 100% in terms of packages shipped, which is twice the size of growth in the rest of the region.\\r\\n\r\n\r\nEgypt has become one of the fastest growing markets in the Middle East and North Africa, according to the latest report on e-commerce in the Middle East and North Africa issued by Google and Bain & Company.\r\n\r\nMahdi Al-Olabi, founder and CEO of R2S, said A15 has extensive experience in e-commerce, as they have invested in e-commerce companies before, along with their contribution to building, developing, establishing and exiting companies operating in the same field.\r\n\r\nHe added that the company will support our growth in our expansions that we aim to achieve by cooperating with more retail stores and e-commerce platforms in Egypt, which will enable us to perform more achievements and provide excellent services to a large customer base.",
    categoryID: "1",
    urlToImage:
      "https://d1b3667xvzs6rz.cloudfront.net/2019/12/4-4-A15-6-565x430.jpg",
    description:
      "A15 said that R2S is adopting a distinct business model by becoming an Asset Light Business Model by expanding the geographical area of its services to cover all parts of the Republic through 11 shipping centres, in addition to more centres that will open soon.",
    publishedDate: "2022-05-13",
    showOnHomepage: "yes",
  },
];

export default function LatestNews() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, categories } = categoryList;

  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredCards =
    activeTab === "all"
      ? cards
      : cards.filter((card) => card.category === activeTab);

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  return (
    <main className="latestNews-container">
      <Container>
        <Row>
          <h6 className="text-center">Media</h6>
          <h2 className="text-center">Top News</h2>
          <Nav
            activeKey={activeTab}
            onSelect={handleTabClick}
            className="justify-content-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="all">All news</Nav.Link>
            </Nav.Item>
            {!loading &&
              categories &&
              categories.newsCategory?.map((cat) => (
                <Nav.Item index={cat.name}>
                  <Nav.Link eventKey={`category${cat.id}`}>{cat.name}</Nav.Link>
                </Nav.Item>
              ))}
          </Nav>

          <div className="card-container my-5">
            {filteredCards?.map((card) => (
              <Col xs={12} md={6} lg={3} index={card.id}>
                <Card>
                  <Card.Img variant="top" src={card.urlToImage} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <div className="card-date d-flex my-2">
                      <i class="fa-light fa-calendar"></i>
                      Wed 12 Aug 2022
                    </div>
                    <div className="card-category-share-addToFavourite">
                      <span>Economics</span>
                      <div>
                        <i class="fa-light fa-heart"></i>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </main>
  );
}
