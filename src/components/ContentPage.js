import React from "react";

import Composer from "./Composer";
import Hero from "./Hero";

const ContentPage = ({ entry }) => {
  //console.log(entry);

  return (
    <div>
      <Hero entry={entry} />
      <Composer entry={entry} />
    </div>
  );
};

export default ContentPage;
