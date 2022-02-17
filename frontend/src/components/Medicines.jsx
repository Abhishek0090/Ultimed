import React, { useEffect, useState } from "react";
import '../App.css';

const Medicines = ({id,name,price,description,tag,img} ) => {

  return (
      <div className="card" style={{ width: "11rem",margin:"10px" }}>
    <div>
      <div className="imgDiv">
        <a href="/medicines">
        <img src={img}  className="img-style" alt="..."/>
        </a>
      </div>
        <div className="card-body">
          <h5 className="card-title fw-bold size">{name}</h5>
         
          <h6 className="card-title fst-italic">MRP :₹{" "}{price}</h6>
          
        </div>
      </div>
    </div>
  );
};

export default Medicines;
