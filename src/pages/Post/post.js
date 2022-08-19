import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../Components/header/header";
import TrashIcon from "../../img/trashIcon.png";
import "../Post/post.css";
import axios from "axios";

import * as yup from "yup";

const validationPost = yup.object().shape({
  localizacao: yup.string().required("*O campo não pode estar vazio"),
});

function Post() {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) => {
    axios.post("http://localhost:8000/lixeira", [data]).then(() => {
      history.goBack();
    });
  };

  return (
    <div>
      <Header />
      <main className="mainStyle">
        <h1 className="titlePost">Adicionar lixeira</h1>
        <div className="card-post">
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
                <p className="error-msg">{errors.localizacao?.message} </p>
              </div>
              <div className="btn-post">
                <button type="submit">Adicionar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Post;
