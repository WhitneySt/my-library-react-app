import React, { useEffect, useState } from "react";
import { getBooks } from "../../services/booksServices";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import { Outlet } from "react-router-dom";


const StyledCards = styled.main`
    display:flex;
    justify-content: space-evenly; 
    flex-wrap: wrap;
`

const Home = ({books, setBooks}) => {
  

  useEffect(() => {
    getBooks()
      .then((response) => setBooks(response))
      .catch((error) => console.log(error));
    // return ()=>{}
  }, []);

  return (
    <>
      <StyledCards>
        {books.length > 0 ? (
          books.map(({ book }, index) => <Card key={index} book={book} />)
        ) : (
          <div>...Cargando</div>
        )}
      </StyledCards>
      <Outlet/>
    </>
  );
};

export default Home;
