import React, { useEffect, useState } from "react";
import { getBooks } from "../../services/booksServices";
import Card from "../../components/Card/Card";
import styled from "styled-components";


const StyledCards = styled.main`
    display:flex;
    justify-content: space-evenly; 
    flex-wrap: wrap;
`

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then((response) => setBooks(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <StyledCards>
      {books.length > 0 ? (
        books.map(({ book }, index) => <Card key={index} book={book} />)
      ) : (
        <div>...Cargando</div>
      )}
    </StyledCards>
  );
};

export default Home;
