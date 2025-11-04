import React from "react";
import "./Logo.css";
import logoImg from "../../assets/logoImg.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="ROLEX" />
      <span className="brand-name">ROLEX</span>
    </div>
  );
}

export default Logo;

