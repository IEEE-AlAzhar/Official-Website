import React, { Component, createContext } from "react";
import { darkThemePonyfill, lightThemePonyfill } from "./../cssVarsPonyfill";
export const ThemeProvider = createContext();

export default class ThemeContext extends Component {
  state = {
    theme:
      localStorage.getItem("theme") !== null
        ? localStorage.getItem("theme")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
  };

  toggleTheme = () => {
    let { theme } = this.state;

    if (theme === "light") {
      this.setState({ theme: "dark" }, () => {
        localStorage.setItem("theme", "dark");
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");

        darkThemePonyfill();
      });
    } else {
      this.setState({ theme: "light" }, () => {
        localStorage.setItem("theme", "light");
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");

        lightThemePonyfill();
      });
    }
  };

  render() {
    return (
      <ThemeProvider.Provider
        value={{ ...this.state, toggle: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeProvider.Provider>
    );
  }
}
