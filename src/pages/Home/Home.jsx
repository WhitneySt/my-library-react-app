import React, { useContext, useEffect, useState } from "react";
import { getBooks } from "../../services/booksServices";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../router/AppRouter";

const StyledCards = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
// const URL_API = "http://localhost:3000/";
// const idCineSeleccionado = 1;

const Home = ({ books, setBooks }) => {
  
  //3. Consumir el contexto
  const { user } = useContext(AppContext);

  const [cineSeleccionado, setCineSeleccionado] = useState({});

  // const obtenerCineSeleccionado = async (id) => {
  //   try {
  //     const url = `${URL_API}teatros/${id}`;
  //     const { data } = await axios.get(url);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };

  useEffect(() => {
    getBooks()
      .then((response) => setBooks(response))
      .catch((error) => console.log(error));
    // return ()=>{}
  }, []);

  // useEffect(() => {
  //   obtenerCineSeleccionado(idCineSeleccionado).then((response) => {
  //     console.log(response);
  //     setCineSeleccionado(response);
  //   });
  // }, []);

  return (
    <>
      {user && <h2>Hola! {user?.name}</h2>}
      <StyledCards>
        {books.length > 0 ? (
          books.map(({ book }, index) => <Card key={index} book={book} />)
        ) : (
          <div>...Cargando</div>
        )}
      </StyledCards>
      {/* <div>
        <h1>Asientos</h1>
        {Object.entries(cineSeleccionado).length && (
          <Asientos
            asientos={cineSeleccionado?.tamanioSalas.asientos}
            filas={cineSeleccionado?.tamanioSalas.filas}
            columnas={cineSeleccionado?.tamanioSalas.columnas}
          />
        )}
      </div> */}
      <Outlet />
    </>
  );
};

export default Home;

const Asientos = ({ asientos = 0, filas = 0, columnas = 0 }) => {
  useEffect(() => {
    console.log(asientos);
    console.log(filas);
    console.log(columnas);
  }, [asientos, filas, columnas]);

  const asientosSalas = [];
  let contadorAsientos = 0;
  for (let index = 0; index < filas; index++) {
    const asientosFilas = [];
    for (let position = 0; position < columnas; position++) {
      const codigoAsiento = `${String.fromCharCode(65 + index)}${
        contadorAsientos + 1
      }`;
      if (contadorAsientos == asientos) {
        break;
      }
      asientosFilas.push(<button>{codigoAsiento}</button>);
      contadorAsientos++;
    }
    asientosSalas.push(<div key={index}>{asientosFilas}</div>);
  }
  return <div>{asientosSalas}</div>;
};
