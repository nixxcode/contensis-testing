import React from "react";
import Image from "./Image";

const Composer = ({ entry }) =>
  entry.composer.map(item => {
    switch (item.type) {
      case "textArea":
        return <div dangerouslySetInnerHTML={{ __html: item.value }} />;
      case "button":
        return <button>{item.value.text}</button>;
      case "image":
        return <Image data={item.value} />;
      default:
        return null;
    }
  });

export default Composer;
