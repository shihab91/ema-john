import React from "react";
import { RiDeleteBin4Line, RiArrowRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { deleteShoppingCart } from "../../utilities/fakedb";
import "./cart.css";
const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const totalShippingCharge = cart.reduce(
    (prev, curr) => prev + curr.shipping * curr.quantity,
    0
  );
  const tax = +(totalPrice * 0.1).toFixed(2);
  const grandTotal = totalPrice + totalShippingCharge + tax;
  const quantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);
  return (
    <div>
      <h2>Order Summary</h2>
      <div className="info-group">
        <p>
          selected items: <b>{quantity}</b>
        </p>
        <p>
          Total Price: <b>${totalPrice}</b>
        </p>
        <p>
          Total Shipping charge: <b>${totalShippingCharge}</b>
        </p>
        <p>
          Tax: <b>${tax}</b>{" "}
        </p>
        <h3>
          Grand Total: <b>${grandTotal}</b>
        </h3>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setCart([]);
            deleteShoppingCart();
          }}
        >
          Clear Cart <RiDeleteBin4Line />
        </button>
        <button onClick={() => navigate("/orders")}>
          Review Order <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
};

export default Cart;
