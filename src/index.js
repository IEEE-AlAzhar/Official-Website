import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
