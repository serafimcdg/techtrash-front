import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../Components/header/header";
import TrashIcon from "../../img/trashIcon.png";
import "../Edit/edit.css";
import axios from "axios";

import * as yup from "yup";

const validationPost = yup.object().shape({
  localizacao: yup.string().required("*O campo não pode estar vazio"),
  altura: yup.string().required("*O campo não pode estar vazio"),
});

function Edit() {
  const { id } = useParams();
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) => {
    axios
      .put("http://localhost:8000/lixeira", [
        { id: parseInt(id), localizacao: data.localizacao },
      ])
      .then(() => {
        history.goBack();
      });
  };

  return (
    <div>
      <Header />
      <main className="mainStyle">
        <h1 className="titleEdit">Editar Lixeira</h1>
        <div className="card-edit">
          <div className="card-body-post">
            <img alt="trash icon" className="trashStyle" src={TrashIcon}></img>
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Nome lixeira</label>
                <input
                  type="text"
                  name="title"
                  className="inputStyle"
                  {...register("localizacao")}
                />
                <p className="error-msg"> {errors.localizacao?.message}</p>
              </div>
              <div className="fields">
                <label>Altura da lixeira</label>
                <input
                  type="text"
                  name="title"
                  className="inputStyle"
                  {...register("altura")}
                />
                <p className="error-msg"> {errors.altura?.message}</p>
              </div>
              <div className="btn-edit">
                <button type="submit">Editar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Edit;
