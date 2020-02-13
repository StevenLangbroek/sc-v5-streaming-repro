import App from "./App";
import BrowserRouter from "react-router-dom/BrowserRouter";
import React from "react";
import { hydrate } from "react-dom";

setTimeout(() => {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
}, 3 * 1000);

if (module.hot) {
  module.hot.accept();
}
