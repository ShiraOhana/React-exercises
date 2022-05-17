import React, { Component } from "react";
import "./EX82.css";
export default class Ex82 extends Component {
  state = { isHidden: false };
  // First initial of the box's movment using state

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { favoriteColor: "gn" };
      });
    }, 1000);
  }
  componentWillUnmount() {
    // Updating the div's content after the color changed (the first change is some kind of triger)
    // let newText = document.querySelector("#updateText");
    // let newColor = `My favorite new color is ${this.state.favoriteColor}`;
    // newText.textContent = newColor;
  }
  render() {
    return (
      <div>
        <div id="box"></div>
        <div id="box2"></div>
        <div id="box3"></div>
      </div>
    );
  }
}
