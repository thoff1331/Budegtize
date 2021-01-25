import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorCatching from "./ErrorCatching";

ReactDOM.render(
  <React.StrictMode>
    <ErrorCatching>
      <App />
    </ErrorCatching>
  </React.StrictMode>,
  document.getElementById("root")
);
