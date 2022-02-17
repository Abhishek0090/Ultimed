import React from "react";
import "./navbarcss/Navbarcss.css";
import { useState } from "react";
import "../App.css";
  import "./navbarcss/Navbarcss.css";
import SlickDemo1 from "./Carousel/SlickDemo1";

import { useSelector } from "react-redux";
import Medicines from "./Medicines";
const Navbar = () => {
  const item = useSelector((state) => state.getProducts.item);
  const [search, setSearch] = useState("");
  const handlefilter = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const filtereddata = item.filter((val) => {
    if (search.length < 0) {
      return val;
    } else {
      return val.name?.toLowerCase().includes(search);
    }
  }); 
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-sm navbarcolor navbar-fixed-top  nav nav-tabs card-header-tabs navcss"
          role="navigation"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="/">
                {" "}
                <img
                  src="assets/logo1.png"
                  alt="logo"
                  height={"50%"}
                  width={"100px"}
                  className="logcss"
                />
              </a>
              <span className="centernav">

              <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/orders">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/help">
                    Help
                  </a>
                </li>
              </ul>

              </span>
        
     
              <div className="cart-icon">
                <a
                  href="/cart"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <img
                    src="./assets/carticon.png"
                    alt="cart"
                    className="cartIcon"
                    style={{ marginLeft: "23px" }}
                  />

                  {/* <span style={{ marginLeft: "10px", fontWeight: "bold" ,color:"black"}}>
                    Cart
                  </span> */}
                </a>
              </div>
              <div className="validation">
                <div className="login">
                  <a href="/login">
                    <button
                      ton
                      className="loginbtn"
                      type="submit"
                    >
                      Log in
                    </button>
                  </a>
                </div>
                <div className="signup">
                  <a href="/signup">
                    <button
                      className="signupbtn"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </a>
                </div>
              </div>
              <div className="user">
                <a href="/user">
                  <img src="./assets/user.png" className="userIcon" alt="" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      
    </>
  );
};

export default Navbar;
