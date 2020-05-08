import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default class ThemeButton extends Component {
  render() {
    let { toggle, theme } = this.props;
    return (
      <button
        data-testid="theme-toggler"
        type="button"
        className="btn"
        onClick={toggle}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <FontAwesomeIcon
            icon={faMoon}
            size="2x"
            title="Switch to dark mode"
          />
        ) : (
          <FontAwesomeIcon icon={faSun} size="2x" title="Back to light mode" />
        )}
      </button>
    );
  }
}
