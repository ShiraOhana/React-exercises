import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./EX2.1";
import reportWebVitals from "./reportWebVitals";
import Hello from "./EX2.2";
import Boxes from "./EX3.1";
import Quiz from "./EX3.2";
import Button from "./Component/EX4.1";
import Cards from "./Component/EX4.2";
import Refactor from "./Component/EX6.1";
import { render } from "@testing-library/react";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
{
  /* <App />; // <Hello /> <Boxes /> <Quiz /> */
}
{
  /* <Button lable="Important" font="bold" />
    <Button lable="Not Important" /> */
}
{
  /* <Cards
      img="https://www.rover.com/blog/wp-content/uploads/2019/01/6342530545_45ec8696c8_b.jpg"
      title="Lehem"
      description="A dogo named Lehem"
      link="http://www.lehem.com"
    />
    <Cards
      img="https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg"
      title="Bread"
      description="A dogo named Bread"
      link="http://www.bread.com"
    />
    <Cards
      img="https://media-be.chewy.com/wp-content/uploads/2018/03/05113729/corgi-sploot-1024x548.jpg"
      title="Pita"
      description="A dogo named Pita"
      link="http://www.pita.com"
    /> */
}

class Ap extends React.Component {
  render() {
    return (
      <div>
        <Refactor
          img="https://www.rover.com/blog/wp-content/uploads/2019/01/6342530545_45ec8696c8_b.jpg"
          title="Lehem"
          description="A dogo named Lehem"
          link="http://www.lehem.com"
        />
        <Refactor
          img="https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg"
          title="Bread"
          description="A dogo named Bread"
          link="http://www.bread.com"
        />
        <Refactor
          img="https://media-be.chewy.com/wp-content/uploads/2018/03/05113729/corgi-sploot-1024x548.jpg"
          title="Pita"
          description="A dogo named Pita"
          link="http://www.pita.com"
        />
      </div>
    );
  }
}
// </React.StrictMode>

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
