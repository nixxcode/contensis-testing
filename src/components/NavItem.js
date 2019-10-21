import React from "react";
import styled from "styled-components";

const NavItem = ({ text, link }) => {
  return (
    <a href={link}>
      <li>{text}</li>
    </a>
  );
};

export default NavItem;
