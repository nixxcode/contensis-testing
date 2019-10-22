import React from "react";

const Composer = ({ entry }) =>
  entry.composer.map(item => {
    switch (item.type) {
      case "textArea":
        return <div dangerouslySetInnerHTML={{ __html: item.value }} />;
      case "button":
        return <button>{item.value.text}</button>;
      default:
        return null;
    }
  });

export default Composer;
