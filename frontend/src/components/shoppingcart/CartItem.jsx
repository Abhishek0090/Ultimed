import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import './css/cart.css';
import Scrollbars from "react-custom-scrollbars-2";
import { useState } from "react";
import { Medicineapi } from "../api/Medicineapi";

const CartItem = () => {
// 
    
    // const { item , clearCart,totalItem,totalAmount} = useSelector(state=>state.Reducer);
    const [item,setItem] = useState(Medicineapi)
     const totalItem = 10;
     const totalAmount = 1;
     const clearCart = 0;

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./assets/arrow.png" alt="Cart" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./assets/carticon.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items
          in your cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((item) => {
                return <Cart key={item.id} {...item} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Card Total : <span>{totalAmount}rs</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart">
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default CartItem;
