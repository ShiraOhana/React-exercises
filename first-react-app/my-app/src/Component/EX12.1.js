import React from "react";
import axios from "axios";
// import App from "../index";
import { render } from "@testing-library/react";

function Ex121() {
  const App = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    let joke = response.data.value;
    console.log(joke);
  };
  return (
    <div>
      <button onClick={App}>Jokes</button>
      <div></div>
    </div>
  );
}
export default Ex121;
