import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./Assets/Styles/style.css";
import App from "./App";
function Data() {
  return <App />;
}

render(<Data />, document.getElementById("root"));
