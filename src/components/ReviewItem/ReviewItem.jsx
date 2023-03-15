import React from "react";
import "./reviewItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
const ReviewItem = ({ product, handleRemoveItem }) => {
  const { name, id, img, price, quantity, shipping } = product;

  return (
    <div className="review-item">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <h3>{name}</h3>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
          <p>
            <small>Shipping Charge: ${shipping}</small>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)}>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
