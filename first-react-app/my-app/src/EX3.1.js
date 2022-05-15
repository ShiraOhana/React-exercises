import React from "react";
import "./EX3.1.css";

class Boxes extends React.Component {
  render() {
    return (
      <div
        className="Box1"
        style={{
          backgroundColor: "lightgreen",
          width: "600px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box2 />
      </div>
    );
  }
}
class Box2 extends React.Component {
  render() {
    return (
      <div
        className="Box2"
        style={{
          backgroundColor: "lightblue",
          width: "500px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Box3 />
      </div>
    );
  }
}
class Box3 extends React.Component {
  render() {
    return (
      <div
        className="Box3"
        style={{
          backgroundColor: "red",
          width: "400px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Box4 />
        <Box4 />
      </div>
    );
  }
}
class Box4 extends React.Component {
  render() {
    return (
      <div
        style={{ width: "300px", height: "50px", backgroundColor: "pink" }}
      ></div>
    );
  }
}

export default Boxes;
