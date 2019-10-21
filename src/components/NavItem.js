import React from "react";

const NavItem = ({ text, link }) => {
  return (
    <a href={link}>
      <li>{text}</li>
    </a>
  );
};

export default NavItem;
