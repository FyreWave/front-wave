import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
