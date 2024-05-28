import React, { useState } from "react";
import "./App.css";
import Shorten from "./Shorten";

function App() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  // Handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Pass the inputValue to the Shorten component
    // You can perform further processing or API calls here
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
