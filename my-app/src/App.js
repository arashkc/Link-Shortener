import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const randomShortenedUrl = `https://short.url/${Math.random()
      .toString(36)
      .substring(7)}`;
    setShortenedUrl(randomShortenedUrl);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div id="body">
      <form onSubmit={handleFormSubmit}>
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
      {shortenedUrl && (
        <div id="resultArea">
          Shortened URL:{" "}
          <a href={shortenedUrl} target="_blank">
            {shortenedUrl}
          </a>
        </div>
      )}
      {showNotification && <div id="notification">Link shortened!</div>}
    </div>
  );
}

export default App;
