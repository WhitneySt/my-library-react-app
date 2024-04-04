import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: '',
      email: '',
      password: '',
      repeatPassword:''
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Nombre y apellido</label>
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="">Correo electrónico</label>
          <input
            type="text"
            placeholder="ejemplo@email.com"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese una contraseña"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div>
          <label htmlFor="">Confirmar contraseña</label>
          <input
            type="password"
            placeholder="Ingrese la contraseña anterior"
            id="repeatPassword"
            name="repeatPassword"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>
        Si ya tiene una cuenta inicie sesión <Link to={"/login"}>aquí!</Link>
      </p>
    </>
  );
};

export default Register;
