import React from "react";
import Backarrow from "../../img/backarrow.png";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "../header/header.css";

function Header() {
  return (
    <div className="container">
      <Link exact to="/">
        <img alt="back arrow" className="arrowStyle" src={Backarrow}></img>
      </Link>
      <div className="titleHeader">
        Tech Trash
        <img alt="logo" className="logoStyle" src={Logo} />
      </div>
      <Link exact to="/">
        <button className="btnSair">Sair</button>
      </Link>
    </div>
  );
}

export default Header;
