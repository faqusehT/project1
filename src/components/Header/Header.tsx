import React from "react";
import Logo from "./Logo"; 
import NavLink from "./NavLink";
import "./Header.css";

function Header() {
  return (

    <header className="header">  
        <Logo />

      <nav className="nav"> 
       <NavLink label="Home" link="/"/>
       <NavLink label="product" link="/product"/>
       <NavLink label="About US" link="/about"/>
       <NavLink label="Contant" link="/contat"/>

  </nav>
    </header>
  );
}

       

export default Header;

