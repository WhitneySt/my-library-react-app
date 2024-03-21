import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  return (
    <StyledFigure onClick={() => navigate(`/book/${book.title}`)}>
      <img src={book.cover} alt={book.title} />
    </StyledFigure>
  );
};

export default Card;
