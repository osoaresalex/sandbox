import React from "react";
import { Link } from "react-router-dom";

const HeroDisplay = ({ hero }) => {
  const description =
    hero.description !== ""
      ? hero.description.substring(0, 120) + "..."
      : "* No description *";
  return (
    <Link to={"/character/" + hero.id} className="hero-square">
      <div className="hero-title">{hero.name}</div>
      <div className="hero-picture-wrap">
        <img
          className="hero-picture"
          src={hero.thumbnail.path + "." + hero.thumbnail.extension}
          alt={hero.name}
        />
        <div className="hero-description">{description}</div>
      </div>
    </Link>
  );
};

export default HeroDisplay;
