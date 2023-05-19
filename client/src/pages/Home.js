import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import PromotionalPage from '../components/PromotionalPage';
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <PromotionalPage />
      <Cart />
    </div>
  );
};

export default Home;
