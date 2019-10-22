import React from "react";

const Hero = ({ entry }) => {
  return (
    <div>
      {entry.hero.headline && <h2>{entry.hero.headline}</h2>}
      <p>{entry.hero.showCTA ? "CTA will render" : "No CTA"}</p>
    </div>
  );
};

export default Hero;
