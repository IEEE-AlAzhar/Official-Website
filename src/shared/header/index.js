import React, { Component } from "react";

import Logo from "assets/images/logo.png";
import LogoWhite from "assets/images/logo-white.png";

import routes from "globals/routes";
import { ThemeProvider } from "globals/contexts/theme.context";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import SideDrawer from "shared/sideDrawer";

export default class Header extends Component {
  static contextType = ThemeProvider;

  state = {
    isMenuOpened: false,
  };

  skipToMainContent = (e) => {
    e.preventDefault();

    document.querySelector(`${e.target.getAttribute("href")}`).focus();
  };

  componentDidMount() {
    document.body.addEventListener("click", (e) => {
      let navbar = document.querySelector(".navbar");
      if (!navbar.contains(e.target) || e.target.id === "sideDrawerLink") {
        setTimeout(() => this.setOpenState(false), 140);
      }
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", () => {});
  }

  setOpenState = (status) => {
    if (typeof status === "boolean")
      this.setState({
        isMenuOpened: status,
      });

    // document.body.classList.add("freezed")
  };

  closeMenu = () => {
    this.setOpenState(false);
    // document.body.classList.remove("freeze")
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
    let { isMenuOpened } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg fixed-top d-flex"
        aria-label="site"
      >
        <a
          className="skip__link"
          href="#mainContent"
          onClick={this.skipToMainContent}
        >
          Skip to main content
        </a>
        <button
          className="navbar-toggler ml-2"
          type="button"
          aria-label="Toggle navigation"
          title="Show Side Menu"
          onClick={() => this.setOpenState(!isMenuOpened)}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <a className="navbar-brand ml-lg-5 mx-auto" href="/">
          <img
            src={theme === "light" ? Logo : LogoWhite}
            width="80"
            height="80"
            alt=""
            title="IEEE-Azhar Student Branch"
          />
          <span className="sr-only"> Link to Home page </span>
        </a>

        <SideDrawer
          isOpened={isMenuOpened}
          closeSideDrawer={() => this.setOpenState(false)}
        />
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
