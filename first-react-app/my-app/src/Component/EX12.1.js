import React, { useEffect, useState } from "react";
import axios from "axios";
// import App from "../index";
// import { render } from "@testing-library/react";

function Ex121() {
  const [joke, setJoke] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  });

  const getJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    let joke = response.data.value;
    setJoke(joke);
  };
  const getJokeByCategory = async (category) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    let joke = response.data.value;
    setJoke(joke);
  };
  const getCategories = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );

    let categories = response.data;
    setCategories(categories);
  };

  return (
    <div>
      <button onClick={getJoke}>Jokes</button>
      <div className="joke">{joke}</div>
      {categories.map((item) => (
        <button onClick={() => getJokeByCategory(item)}>{item}</button>
      ))}
    </div>
  );
}
export default Ex121;
