import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./info.css";
import "../../App.css"

const MedicineInfo = () => {
    const img = "https://m.media-amazon.com/images/I/71jNPE91VSL._SL1500_.jpg"
    const price = 200
    const name = "Hamdard Safi Natural Blood Purifier Syrup 500 ml"
    const description = "Hamdard Safi Syrup is a blood purifier herbal remedy for skin diseases"
    const keybenefits = "Treats acne vulgaris, boils, skin, rashes, blemishes, urticaria etc "
    const direction = "As per the requirement or as directed on the pack"
    const ingredients = "Hamdard Safi Syrup Contains Sana, Sheesham, Sandal, Gilo, Harar, Chiraita, Nilkanthi, Neem, Tulsi, Chob Chini, Keekar, Brahmi, Kasni, Unnab, Revand Chini, Qand Safaid, And Shora Desi As Major Ingredients."
      return (
    <>
     <div className="container">
      <div className="sub-container">
      <div className="imgsection">
        <img src={img} className="imgmed" alt="med" />
      </div>
      <div className="infosection">
        <h2 className="fw-bold">{name}</h2>
        <p>MRP{" "}: {price}</p>
        <hr />
        <div className="productDiv">
        <h2>Product details</h2>
        <p>{description}</p>
        <p>{keybenefits}</p>  
        <p>{direction}</p>
        <p>{ingredients}</p>
        </div>
      </div>
      <div className="addnbuy"> 
        <a href="">
          <button className="btn">
          Add to Cart
          </button>
        </a>
        <button className="btnquantity">
        <i class="fa fa-plus" aria-hidden="true"></i>
          <input type="text" value="1" className="quaninput"/>
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <a href="/buy">
        <button className="btn">
          Buy now
        </button>
        </a>

      </div>
      </div>
     </div>
    </>
  );
};

export default MedicineInfo;
