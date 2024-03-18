import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;

    .link {
      text-decoration: none;
      font-weight: bolder;
    }

    .active {
      color: red;
    }
  }
`;

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Iniciar sesión",
    link: "/login",
  },
  {
    label: "Crear una cuenta",
    link: "/register",
  },
];

const NavBar = () => {
  return (
    <StyledNav>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? "link active" : "link"].join(" ")
              }
              //   className={({ isActive }) => (isActive ? "link active" : "link")}
              to={item.link}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default NavBar;
