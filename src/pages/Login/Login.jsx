import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { getUserByEmailAndPassword } from "../../services/userServices";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 15px;
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  button {
    cursor: pointer;
  }
`;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const INITIALVALUE = {
  email: "",
  password: "",
};

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [form, handleChange, reset] = useForm(INITIALVALUE);

  // const [form, setForm] = useState(INITIALVALUE);

  // const handleChange = (event) => setForm({
  //   ...form,
  //   [event.target.id]:event.target.value
  // })

  // const reset = () =>
  //   setForm(INITIALVALUE);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    const user = await getUserByEmailAndPassword(form);
    reset();
    if (user) {
      setUser(user);
      alert(`Bienvenid@ ${user.name}`);
      navigate('/')
    } else {
      alert("Verifique sus credenciales");
    }
  };

  return (
    <StyledLogin>
      <h1>Inicie sesión</h1>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="ejemplo@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </StyledForm>
      <p>
        Si no tienes una cuenta registrada, puedes crear una{" "}
        <Link to={"/register"}>aqui!</Link>
      </p>
    </StyledLogin>
  );
};

export default Login;
