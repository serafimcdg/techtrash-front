import Header from "../../Components/header/header";
import "../Details/details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import TrashIcon from "../../img/trashIcon.png";
import ProgressDetails from "./progress";
import React, { useState, useEffect } from "react";

function Details() {
  const { id } = useParams();
  const [nivel, setNivel] = useState({ nivel: 0 });
  const [soma, setSoma] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/loglixeira", { params: { idlixeira: id } })

      .then((res) => {
        setNivel(
          res.data.reduce((a, b) => {
            return new Date(a.data) > new Date(b.data) ? a : b;
          })
        );
        setSoma(
          Math.round(
            res.data.map((item) => item.nivel).reduce((a, b) => a + b, 0) /
              res.data.length,
            -2
          )
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id, nivel]);

  return (
    <div>
      <Header />
      <main>
        <div className="cardFeed">
          <header>
            <h2 className="titleDetails">Detalhe da Lixeira</h2>
          </header>
          <div className="cardStatus">
            <div className="nameLixeira">
              <div className="idLixeira"></div>
              <div className="imgLixeira">
                <img
                  alt="trash icon"
                  className="trashStyle2"
                  src={TrashIcon}
                ></img>
              </div>
              <ProgressDetails nivel={nivel.nivel}></ProgressDetails>
            </div>
            <div className="tableStatus">
              <div className="statusMes">
                <h1 className="fontStatusTitle">Média de uso da lixeira</h1>
                <h3 className="porcStatus">{soma}%</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Details;
