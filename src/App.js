import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
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
          </a>{" "}
          and{" "}
          <a
            href="https://master--spontaneous-choux-bc8ea2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
