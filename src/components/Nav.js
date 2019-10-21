import React from "react";
import styled from "styled-components";

const NavStyled = styled.nav`
  margin-left: auto;

  ul {
    list-style-type: none;
  }

  li {
    display: inline;
    font-size: 1.2rem;
  }

  a {
    margin: 1rem;
  }

  a:last-child {
    margin-right: 0;
  }
`;

const Nav = ({ children }) => {
  return (
    <NavStyled>
      <ul>{children}</ul>
    </NavStyled>
  );
};

export default Nav;
