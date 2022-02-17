import "./App.css";
import Navbar from "./components/Navbar";
import Medicines from "./components/Medicines";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import {useEffect,React} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import MyOrders from "./components/MyOrders";
import MedicineInfo from "./components/MedicineInfo/MedicineInfo";
import Cart from "./components/shoppingcart/Cart";
import CartItem from "./components/shoppingcart/CartItem";
import About from "./components/About";
import User from "./components/User";
import { Contact } from "./components/Contact";


function App() {
  useEffect(()=>{
    document.title = "UltiMed"
  })
  return (
    <div className="App">
    <Navbar/>
    
      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/orders" element={<MyOrders/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/medicines" element={<MedicineInfo/>}/>
        <Route exact path = "/cart" element={<CartItem/>}/>
        <Route exact path = "/about" element={<About/>}/>
        <Route exact path = "/user" element={<User/>}/>
        <Route exact path = "/search" element={<Medicines/>}/>

        <Route exact path = "/contact" element={<Contact/>}/>

      </Routes>
      {/* <footer className="footer">
        Copyright © 2021 
      </footer> */}
    </div>
  );
}

export default App;
