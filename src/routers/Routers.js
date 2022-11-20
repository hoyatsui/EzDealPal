import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Signup from "../pages/Signup";
import Sell from "../pages/Sell";
import UserInfo from "../pages/UserInfo";
import Favorites from "../pages/Favorites";

// TODO: Create route for each city or use 'city' label for all users?

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="sell" element={<Sell />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<Signup />} />
      <Route path="userInfo" element={<UserInfo />} />
    </Routes>
  );
};

export default Routers;
