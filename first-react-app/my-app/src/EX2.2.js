import "./EX2.2.css";

const Hello = () => {
  const data = ["Hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";
  return (
    <div>
      <ul>
        <li>
          {data[0]} {data[1]}
        </li>
        <li>
          {number1} + {number2} = {number1 + number2}
        </li>
        <li>The string’s length is {string.length}</li>
      </ul>
    </div>
  );
};

export default Hello;
