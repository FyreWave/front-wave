import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Views/App";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <App />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
