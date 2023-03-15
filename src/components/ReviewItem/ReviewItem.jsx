import React from "react";
import "./reviewItem.css";
const ReviewItem = ({ product }) => {
  const { name, img, id, price, quantity, shipping } = product;

  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <h3>{name}</h3>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping Charge: ${shipping}</small>
          </p>
        </div>
      </div>
      <div className="delete-container">
        <button>delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;
