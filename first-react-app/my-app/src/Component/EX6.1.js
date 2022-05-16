import React from "react";
const Refactor = (props) => {
  return (
    <div style={{ border: "3px solid black", width: "30%" }}>
      <img
        alt="image"
        src={this.props.img}
        style={{
          width: "467px",
          height: "300px",
        }}
      ></img>
      <h1>{this.props.title}</h1>
      <p>{this.props.description}</p>
      <a href={this.props.link}>Click Here</a>
    </div>
  );
};

export default Refactor;
