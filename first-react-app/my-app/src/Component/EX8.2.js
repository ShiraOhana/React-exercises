import React, { Component } from "react";
import "./EX82.css";

export default class Ex82 extends Component {
  state = { isHidden: false };
  // First initial of the box's movment using state
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isHidden: true });
    }, 500);
  }
  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ isHidden: false });
    }, 500);
  }
  render() {
    return (
      <div>
        {this.state.isHidden && <div id="box"></div>}
        {this.state.isHidden && <div id="box2"></div>}
        {this.state.isHidden && <div id="box3"></div>}
        {/* <div id="box2"></div>
        <div id="box3"></div> */}
      </div>
    );
  }
}
