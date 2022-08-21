import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Usuario
          <input type="text" {...register("firstName")} />
        </label>
        <label>
          Senha
          <input type="text" {...register("lastName")} />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
