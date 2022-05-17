import React, { Component } from "react";
export default class Ex81 extends Component {
  state = { favoriteColor: "purple" };
  // First initial of the color using state

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { favoriteColor: "green" };
        //Second initial with timeout -> Changing automaticly the color
      });
    }, 1000);
  }
  componentDidUpdate() {
    // Updating the div's content after the color changed (the first change is some kind of triger)
    let newText = document.querySelector("#updateText");
    let newColor = `My favorite new color is ${this.state.favoriteColor}`;
    newText.textContent = newColor;
  }
  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="updateText"></div>
      </div>
    );
  }
}
