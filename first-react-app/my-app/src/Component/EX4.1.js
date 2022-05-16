import React from "react";
const Button = (props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "grey",
          color: "blue",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {props.lable}
      </button>
    </div>
  );
};

export default Button;
