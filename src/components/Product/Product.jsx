import React from "react";
import "./product.css";
import { BsFillCartPlusFill } from "react-icons/bs";
const Product = ({ product, handleAddToCart }) => {
  const { name, img, price, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="info">
        <h4>{name}</h4>
        <p className="price">price: {price}</p>
        <p>
          <small>Manufacturer: {seller} </small>
          <br />
          <small>Ratings: {ratings} </small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)}>
        Add to Cart <BsFillCartPlusFill />
      </button>
    </div>
  );
};

export default Product;
