import React from "react";
import "./card.styles.scss";

const Card = ({ name, imgUrl, webUrl }) => (
  <div className="card">
    <a href={webUrl} target="_blank">
      <img src={imgUrl} className="card-img-top card-img" alt="..." />
      <div className="card-header bg-white">
        <p className="card-title text-center text-uppercase">{name}</p>
      </div>
    </a>
  </div>
);

export default Card;

// style="width: 18rem;"
