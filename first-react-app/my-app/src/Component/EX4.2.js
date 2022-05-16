import React from "react";
const Cards = (props) => {
  return (
    <div style={{ border: "3px solid black", width: "30%" }}>
      <img
        alt="image"
        src={props.img}
        style={{
          width: "467px",
          height: "300px",
        }}
      ></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link}>Click Here</a>
    </div>
  );
};

export default Cards;
