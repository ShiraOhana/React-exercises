import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const buttonText = "Click Me";

  return (
    <div>
      <label className="lable" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <a style={{ backgroundColor: "grey", color: "blue", cursor: "pointer" }}>
        {buttonText}
      </a>
    </div>
  );
};

export default App;
