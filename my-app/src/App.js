import React, { useState } from "react";
import "./App.css";
import Shorten from "./Shorten";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Input Value:", inputValue);
  };

  return (
    <div id="body">
      <form onSubmit={handleFormSubmit}>
        {" "}
        <div id="userInput">
          <input
            type="text"
            placeholder="Example: https://www.google.com"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Shorten</button>
        </div>
      </form>
      <div id="resultArea">
        <Shorten inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;
