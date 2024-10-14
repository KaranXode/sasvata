"use client";
import React, { useState } from "react";

 export default function HamburgerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <span className={`bar top-bar ${props.hamburgerIconStyle} ${isOpen ? "open" : ""}`}></span>
        <span className={`bar middle-bar ${props.hamburgerIconStyle} ${isOpen ? "open" : ""}`}></span>
        <span className={`bar bottom-bar ${props.hamburgerIconStyle} ${isOpen ? "open" : ""}`}></span>
      </button>

      <div className={`side-menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/pages/about">About Us</a>
          </li>
          <li>
            {" "}
            <a href="/pages/product">Our Products</a>
          </li>
          <li>
            {" "}
            <a href="/pages/contact">Contact Us</a>
          </li>
          <li>
            <a  href="/pages/faq">F&Q</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

