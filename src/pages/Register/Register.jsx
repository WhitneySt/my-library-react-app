import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import { createUser } from "../../services/userServices";

const passwordRegex =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

const StyledRegister = styled.form`
  .error {
    border: 2px solid red;
  }
`;

const Register = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "El nombre no debe exceder los 20 caracteres")
        .required("Debe digitar su nombre completo"),
      email: Yup.string()
        .email("Por ingrese un correo válido")
        .required("Debe digitar su correo electrónico"),
      password: Yup.string()
        .required("Debe digitar una contraseña")
        .matches(
          passwordRegex,
          "La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico, debe contener más de 8 caracteres pero no exceder los 16 caracteres."
        )
        .oneOf(
          [Yup.ref("repeatPassword")],
          "La contraseña ingresada no coincide"
        ),
      repeatPassword: Yup.string()
        .required("Debe digitar una contraseña")
        .matches(
          passwordRegex,
          "La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico, debe contener más de 8 caracteres pero no exceder los 16 caracteres."
        )
        // .oneOf(
        //   [Yup.ref("password")],
        //   "La contraseña ingresada no coincide"
        // ),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const user = {
        name: values.name,
        email: values.email,
        password: values.password
      }
      const response = await createUser(user);
      if (response) {
        alert("Excelente! Haz creado exitosamente tu cuenta")
        navigate('/login');
      } else {
        alert("Oops! Ha ocurrido un error")
      }
    },
  });
  return (
    <>
      <StyledRegister onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Nombre y apellido</label>
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            id="name"
            name="name"
            className={formik.touched.name && formik.errors.name ? "error" : ""}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <span>{formik.errors.name}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Correo electrónico</label>
          <input
            type="text"
            placeholder="ejemplo@email.com"
            id="email"
            name="email"
            className={
              formik.touched.email && formik.errors.email ? "error" : ""
            }
            {...formik.getFieldProps("email")}
            // onChange={formik.handleChange}
            // value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese una contraseña"
            id="password"
            name="password"
            className={
              formik.touched.password && formik.errors.password ? "error" : ""
            }
            {...formik.getFieldProps("password")}
            // onChange={formik.handleChange}
            // value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <span>{formik.errors.password}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Confirmar contraseña</label>
          <input
            type="password"
            placeholder="Ingrese la contraseña anterior"
            id="repeatPassword"
            name="repeatPassword"
            className={
              formik.touched.repeatPassword && formik.errors.repeatPassword
                ? "error"
                : ""
            }
            // onChange={formik.handleChange}
            // value={formik.values.repeatPassword}
            {...formik.getFieldProps("repeatPassword")}
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
            <span>{formik.errors.repeatPassword}</span>
          ) : null}
        </div>
        <button type="submit">Registrarse</button>
      </StyledRegister>
      <p>
        Si ya tiene una cuenta inicie sesión <Link to={"/login"}>aquí!</Link>
      </p>
    </>
  );
};

export default Register;
