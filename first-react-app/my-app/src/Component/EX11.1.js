import { Component } from "react";

class ColorButton extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.onClick(this.props.btnColor);
        }}
        style={{ backgroundColor: this.props.btnColor }}
      >
        {this.props.btnColor}
      </button>
    );
  }
}

export default class EX111 extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: "" };
    this.colors = ["Blue", "Red", "Yellow"];
  }

  createButtons = (arrOfColors) => {
    return arrOfColors.map((color) => (
      <ColorButton btnColor={color} onClick={this.returnSelectedColor} />
    ));
  };

  returnSelectedColor = (returnedColor) => {
    this.setState({ selectedColor: returnedColor });
  };

  render() {
    return (
      <div>
        {this.createButtons(this.colors)}
        <h1>The clicked on the color {this.state.selectedColor}</h1>
      </div>
    );
  }
}
