import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles.css";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import * as serviceWorker from "./serviceWorker";

import ThemeContext from "globals/contexts/theme.context";

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById("root")
);

serviceWorker.register();
