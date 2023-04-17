import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://wonderful-chebakia-e5b40c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ana Teresa Branco
          </a>{" "}
          an is{" "}
          <a
            href="https://github.com/atbranco/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
