import React from "react";
import ReactDOM from "react-dom/client";
import "./Weather.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Weather />
      <p>
        <a
          href="https://github.com/ollka-ever/react-w4-hw"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
      </p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
