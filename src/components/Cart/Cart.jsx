import React from "react";
import { RiDeleteBin4Line, RiArrowRightLine } from "react-icons/ri";
import "./cart.css";
const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);
  const totalShippingCharge = cart.reduce(
    (prev, curr) => prev + curr.shipping,
    0
  );

  return (
    <div>
      <h2>Order Summary</h2>
      <div className="info-group">
        <p>selected items: {cart.length}</p>
        <p>Total Price:{totalPrice}</p>
        <p>Total Shipping charge:{totalShippingCharge}</p>
        <p>Tax:</p>
        <h3>Grand Total: {}</h3>
      </div>
      <div className="buttons">
        <button>
          Clear Cart <RiDeleteBin4Line />
        </button>
        <button>
          Review Order <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
};

export default Cart;
