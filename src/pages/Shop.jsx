import React, { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
// TODO:1. Search 2.Cities 3.More categories? 4. tags? 5. How to restore the state? 
const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filteValue = e.target.value;
    if (filteValue === "home") {
      const filteredProducts = products.filter(
        (item) => item.category === "home"
      );
      setProductsData(filteredProducts);
    }
    if (filteValue === "electronic") {
      const filteredProducts = products.filter(
        (item) => item.category === "electronic"
      );
      setProductsData(filteredProducts);
    }
    if (filteValue === "jewelry") {
      const filteredProducts = products.filter(
        (item) => item.category === "jewelry"
      );
      setProductsData(filteredProducts);
    }
    if (filteValue === "toy") {
      const filteredProducts = products.filter(
        (item) => item.category === "toy"
      );
      setProductsData(filteredProducts);
    }
    if (filteValue === "sporting") {
      const filteredProducts = products.filter(
        (item) => item.category === "sporting"
      );
      setProductsData(filteredProducts);
    }
    if (filteValue === "clothing") {
      const filteredProducts = products.filter(
        (item) => item.category === "clothing"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="home">Home & Garden</option>
                  <option value="electronic">Electronics</option>
                  <option value="toy">Toys</option>
                  <option value="sporting">Sporting Goods</option>
                  <option value="clothing">Clothing & Accessories</option>
                  <option value="jewelry">Jewelry & Watches</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No items are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
