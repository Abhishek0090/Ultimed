import React from "react";
import "./navbarcss/user.css";
const User = () => {
  return (
    <div>

    <div className="usercard ">
      <div className="userimgdiv ">
    <img src="./assets/user.png" className="userimg" alt="" />
      <div className="userinfo">

        Name:<h2>Abhishek Pal</h2>
        Email:<h2>palabhishek411@gmail.com</h2>
        Address : <h2></h2>
      </div>
      </div>
    </div>
    <hr/>
    </div>
  );
};

export default User;
