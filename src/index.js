import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "styles.css";
import * as serviceWorker from "./serviceWorker";

import ThemeContext from "globals/contexts/theme.context.js";

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById("root")
);

serviceWorker.register();
