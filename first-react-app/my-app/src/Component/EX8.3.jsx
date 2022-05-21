import React, { Component } from "react";
import "./EX82.css";

export default class Ex83 extends Component {
  state = { backgroundColor: "#FEC8D8", count: 1, borderRadius: 0 };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ changeColor: "yellow", count: this.state.count + 1 });
    }, 500);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        backgroundColor: this.setBg(),
        count: this.state.count + 1,
      });
      if (this.state.count === 5) {
        this.setState({ borderRadius: "50%" });
      }
    }, 50000000);
  }

  setBg() {
    // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // return randomColor;
    var colors = ["#E0BBE4", "#957DAD", "#D291BC"];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    return random_color;
  }
  render() {
    return (
      <div>
        <div
          className="change-box"
          style={{
            backgroundColor: `${this.state.backgroundColor}`,
            borderRadius: `${this.state.borderRadius}`,
          }}
        ></div>
      </div>
    );
  }
}
