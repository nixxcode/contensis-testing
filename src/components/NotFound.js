import React from "react";

const NotFound = ({ message }) => {
  return <div>{message ? message : "NOT FOUND"}</div>;
};

export default NotFound;
