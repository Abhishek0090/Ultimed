import React from "react";
import { useState } from "react";
import "./validationcss/signup.css";

const SignUp = () => {
  const [signUp, setSignUp] = useState({ name: "", email: "", password: "" });

  const handleSubmit = () => {};

  const onChange = (e) => {
    setSignUp({ [e.target.value]: e.name });
  };

  return (
    <>

    <div className="logindiv">
    <form type="submit" >
 <div className="mb-3">
   <label for="exampleInputEmail1" className="form-label">Email address</label>
   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
 </div>
 <div className="mb-3">
   <label for="exampleInputPassword1" className="form-label">Password</label>
   <input type="password" className="form-control" id="exampleInputPassword1"/>
 </div>
 <div className="mb-3">
   <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
   <input type="password" className="form-control" id="exampleInputPassword1"/>
 </div>
 <div className="mb-3 form-check">
   <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
   <label className="form-check-label" for="exampleCheck1">I agree with Terms & Conditions</label>
 </div>
 <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  );
};

export default SignUp;
