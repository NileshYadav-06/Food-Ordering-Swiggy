import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import cartStore from '../utils/cartStore';
import logo from "../assets/Food-App-Logo.png";
import "../CSS/header.css";

const Header = () => {
  const [btnText, setBtnText] = useState("LogIn");
  const [ulDisplay, setUlDisplay] = useState("");
  const [line1, setLine1] = useState("0deg");
  const [gap, setGap] = useState("16px");
  const [line3, setLine3] = useState("0deg");

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)

  const BtnTxt = () => {
    setBtnText((prev) => (prev === "LogOut" ? "LogIn" : "LogOut"));
  };

  const navButton = () => {
    ulDisplay === "flex" ? setUlDisplay("") : setUlDisplay("flex");

    gap === "16px" ? setGap("8px") : setGap("16px");
    line1 === "0deg" ? setLine1("410deg") : setLine1("0deg");
    line3 === "0deg" ? setLine3("-410deg") : setLine3("0deg");
  };

  return (
    <header className="flex  w-[100%] z-50 justify-between  shadow-xl  ">
      <div className="logo   ">
        <img src={logo} alt="logo" />
      </div>

      <div className="navLinks">
        <ul style={{ display: ulDisplay }} className=" p-2 mr-2 gap-2  ">
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About US</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact"}>Contact US</Link>
          </li>
          <li className="px-2">
            <Link to={"/cart"}>Cart({cartItems.length})</Link>
          </li>
          <li className="px-2">
            <Link to={"/login"}>
              <button className="loginBtn" onClick={BtnTxt}>
                {btnText} <span className="online"> 🟢 </span>
              </button>
            </Link>
          </li>

        </ul>

        <div
          className="headerBtn"
          style={{ gap: gap }}
          
          onClick={() => navButton()}
        >
          <div className="line line1" style={{ rotate: line1 }}></div>

          <div className="line line2" style={{ rotate: line3 }}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
