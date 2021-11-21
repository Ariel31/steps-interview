import * as React from "react";
import "./index.css";

const Item = ({ style, index, content }) => {
  return (
    <div className="card" style={style} key={index}>
      <h2 className="card__title">{content.email}</h2>
      <p className={"card__content"}>{content.body}></p>
    </div>
  );
};

export default Item;
