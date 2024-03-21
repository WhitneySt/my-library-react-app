import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 50%;
    height: 50%;
    background-color: white;
    border-radius: 15px;
    position: relative;

    button {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: none;
      background-color: #8080809e;
      cursor: pointer;
    }
  }
`;

const Details = ({ books }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { book } = books.find((item) => item.book.title == title);

  return (
    <StyledModal>
      <div>
        <button onClick={() => navigate("/")}>X</button>
        <article>
          <h1>{title}</h1>
          <figure>
            <img src={book.cover} alt={book.title} />
          </figure>
        </article>
      </div>
    </StyledModal>
  );
};

export default Details;
