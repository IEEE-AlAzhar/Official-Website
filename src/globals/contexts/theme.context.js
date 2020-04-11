import React, { Component, createContext } from "react";

export const ThemeProvider = createContext();

export default class ThemeContext extends Component {
  state = {
    theme:
      localStorage.getItem("theme") !== null
        ? localStorage.getItem("theme")
        : "light",
  };

  toggleTheme = () => {
    let { theme } = this.state;

    if (theme === "light") {
      this.setState({ theme: "dark" }, () => {
        localStorage.setItem("theme", "dark");
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
      });
    } else {
      this.setState({ theme: "light" }, () => {
        localStorage.setItem("theme", "light");
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
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
