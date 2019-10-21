import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import NavItem from "./NavItem";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;

  height: 4rem;
  padding: 0 4rem;

  background-color: #2c4089;
  color: whitesmoke;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Nav>
        <NavItem text="ITEM1" link="#" />
        <NavItem text="ITEM2" link="#" />
        <NavItem text="ITEM3" link="#" />
        <NavItem text="ITEM4" link="#" />
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
