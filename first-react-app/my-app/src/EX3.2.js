import React from "react";

class Quiz extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "500px",
          height: "300px",
          padding: "10px",
          border: "3px solid black",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <QuizTitle />
        <Q1 />
        <Q2 />
      </div>
    );
  }
}

class QuizTitle extends React.Component {
  render() {
    return (
      <div>
        <h1>How Do You Like Front End?</h1>
      </div>
    );
  }
}

class Q1 extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Q1Title />
        <Q1Input />
      </div>
    );
  }
}

class Q1Title extends React.Component {
  render() {
    return (
      <div>
        <div>How much do you love front end?</div>
      </div>
    );
  }
}

class Q1Input extends React.Component {
  render() {
    return (
      <div>
        <input type="range" />
      </div>
    );
  }
}

class Q2 extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Q2Title />
        <Q2Input />
      </div>
    );
  }
}

class Q2Title extends React.Component {
  render() {
    return (
      <div>
        <div>What is your favorite front-end feature/topic?</div>
      </div>
    );
  }
}

class Q2Input extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

export default Quiz;
