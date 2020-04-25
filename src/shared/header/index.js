import React, { Component } from "react";

import Logo from "assets/images/logo.png";
import LogoWhite from "assets/images/logo-white.png";

import routes from "globals/routes";
import { ThemeProvider } from "globals/contexts/theme.context";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default class Header extends Component {
  static contextType = ThemeProvider;

  state = {
    isMenuOpened: false,
  };

  componentDidMount() {
    document.body.addEventListener("click", (e) => {
      console.log(e.target);
      this.setOpenState(false);
    });
  }

  skipToMainContent = (e) => {
    e.preventDefault();

    document.querySelector(`${e.target.getAttribute("href")}`).focus();
  };

  setOpenState = (status) => {
    if (typeof status === "boolean")
      this.setState({
        isMenuOpened: status,
      });
  };

  // close the menu
  closeMenu = (e) => {
    e.stopPropagation();

    this.setOpenState(false);
  };

  renderNavbarLinks = () =>
    routes.map((route, index) => {
      if (route.label) {
        return (
          <li className="nav-item" key={index}>
            <NavLink
              exact
              className="navbar__link"
              activeClassName="active"
              to={route.path}
            >
              {route.label}
            </NavLink>
          </li>
        );
      } else {
        return "";
      }
    });

  render() {
    const { theme, toggle } = this.context;
    return (
      <nav className="navbar navbar-expand-lg fixed-top" aria-label="site">
        <a
          className="skip__link"
          href="#mainContent"
          onClick={this.skipToMainContent}
        >
          Skip to main content
        </a>
        <a className="navbar-brand ml-5" href="/">
          <img
            src={theme === "light" ? Logo : LogoWhite}
            width="80"
            height="80"
            alt="IEEE's logo"
            title="Back to home"
          />
          <span className="sr-only"> Link to Home page </span>
        </a>
        <button
          className="navbar-toggler mr-5"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => this.setOpenState(true)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto text-right">
            {this.renderNavbarLinks()}
          </ul>
          <div className="text-center theme-toggler">
            <button className="btn" onClick={toggle} aria-label="Toggle theme">
              {theme === "light" ? (
                <FontAwesomeIcon
                  icon={faMoon}
                  size="2x"
                  title="Switch to dark mode"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  size="2x"
                  title="Back to light mode"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
