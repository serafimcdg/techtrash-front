import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../Components/headerMain/headerMain";
import axios from "axios";
import "../Feed/feed.css";
import TrashIcon from "../../img/trashIcon.png";

function Feed() {
  const [posts, setPosts] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/lixeira", {
        params: {
          idlixeira: id,
        },
      })
      .then(() => {
        setPosts(posts.filter((lixeira) => lixeira.id !== id));
      })
      .catch((e) => {
        console.log(e);
        // window.alert(`${e.response.data.message}: ${id}`);
      });
  };

  const handleData = () => {
    axios
      .get("http://localhost:8000/lixeira")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
        // window.alert(e);
      });
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cardFeed">
          <header>
            <h2 className="titleFeed"> Painel de lixeiras </h2>
          </header>
          <div>
            {posts &&
              posts.map((post) => {
                return (
                  <div key={post.id} className="cardFeedButtons">
                    <div className="nameLixeira">
                      <div className="idLixeira"> {post.localizacao} </div>
                      <div className="imgLixeira">
                        <img
                          alt="trash icon"
                          className="trashStyle"
                          src={TrashIcon}
                        ></img>
                      </div>
                    </div>
                    <div className="buttonsLixeira">
                      <div className="btn-details">
                        <Link to={`/details/${post.id}`}>
                          <button>Detalhes</button>
                        </Link>
                      </div>
                      <div className="btn-edit1">
                        <Link to={`/edit/${post.id}`}>
                          <button>Editar</button>
                        </Link>
                      </div>
                      <div className="btn-delet">
                        <button onClick={() => handleDelete(post.id)}>
                          Deletar
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feed;
