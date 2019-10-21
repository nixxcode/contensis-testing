import React from "react";
import styled from "styled-components/macro";
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
        <NavItem text="NEWS" link="/news" />
        <NavItem text="SERVICES" link="/services" />
        <NavItem text="ABOUT" link="/about" />
        <NavItem text="CONTACT US" link="/contact" />
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
