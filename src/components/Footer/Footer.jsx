import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4">
            <div className="logo">
              <Link to="/home">
                <h1 className="footer__h">EzDealPal</h1>
              </Link>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nobis ullam nulla doloribus unde veritatis assumenda
              a.
            </p>
          </Col>
          <Col lg="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Cities</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">New York</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Boston</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Seattle</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Los Angeles</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/sell">Sell</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/favorites">Watch List</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/userInfo">Account</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123-45 67th Ave, Gotham City, Gdagkjh</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+1 (234)567-8910</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>brucewayne@bmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Alfred Pennyworth. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
