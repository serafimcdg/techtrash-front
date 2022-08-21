import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "../headerMain/headerMain.css";
import Add from "../../img/add.svg";

function HeaderMain() {
  return (
    <div className="container">
      <div className="titleHeader">
        Tech Trash
        <img alt="logo" className="logoStyle" src={Logo} />
      </div>
      <div className="btn-adicionar1">
        <Link to="/post" className="Add1">
          <img alt="button add" src={Add} className="buttonAdd" />
          <p>Adicionar</p>
        </Link>
      </div>
      <Link exact to="/login">
        <button className="btnSair">Sair</button>
      </Link>
    </div>
  );
}

export default HeaderMain;
