import React, { useState } from "react";
import axios from "axios";
// import App from "../index";
// import { render } from "@testing-library/react";

function Ex121() {
  //   const [jokek, newJoke] = useState(joke);
  const App = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    let joke = response.data.value;
    console.log(joke);

    // this.({ joke: response.data.value });
  };
  return (
    <div>
      <button onClick={App}>Jokes</button>
      <div className="joke">Jokes at the console for now</div>
    </div>
  );
}
export default Ex121;
