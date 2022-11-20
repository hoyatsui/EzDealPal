import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg1 from "../assets/images/hero-img.png";
import heroImg2 from "../assets/images/wireless-02.png";

const Home = () => {
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle"></p>
                <h2>Get obsessed with thrift</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, repellendus, iure quae velit possimus impedit amet
                  consectetur qui error quo dolores provident perspiciatis nemo
                  hic debitis est necessitatibus ad veritatis. Don't miss the
                  chance to get great deals on high-quality secondhand goods!
                </p>

                <motion.button whileTap={{ scale: 1.1 }} className="toBuy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg1} alt="heroImage1" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg2} alt="heroImage2" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero__subtitle"></p>
                <h2>Everything has to go</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, repellendus, iure quae velit possimus impedit amet
                  consectetur qui error quo dolores provident perspiciatis nemo
                  hic debitis est necessitatibus ad veritatis.
                </p>

                <motion.button whileTap={{ scale: 1.1 }} className="toSell_btn">
                  <Link to="/sell">SELL NOW</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
