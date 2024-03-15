import React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`
  width: 250px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card = ({ book }) => {
  return (
    <StyledFigure>
      <img src={book.cover} alt={book.title} />
    </StyledFigure>
  );
};

export default Card;
