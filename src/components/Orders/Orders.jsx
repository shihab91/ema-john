import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./orders.css";
const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();
  const handleRemoveItem = (id) => {
    const remainingProducts = cart.filter((item) => item.id !== id);
    removeFromDb(id);
    setCart(remainingProducts);
  };
  return (
    <div className="shop-container container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
        {cart.length === 0 && (
          <h2>
            No Items For Review. Please{" "}
            <Link style={{ textDecoration: "underline" }} to="/">
              Shop More
            </Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} setCart={setCart}>
          <button onClick={() => navigate("/shipping")}>
            shipping <RiArrowRightLine />
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
