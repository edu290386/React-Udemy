import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { HookApp } from "./HookApp.jsx";
import "./08-useReducer/intro-reducer";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
