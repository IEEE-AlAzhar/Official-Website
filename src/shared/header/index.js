import React, { Component } from "react";

import Logo from "assets/images/logo.png";
import LogoWhite from "assets/images/logo-white.png";
import routes from "globals/routes";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default class Header extends Component {
  skipToMainContent = (e) => {
    e.preventDefault();

    document.querySelector(`${e.target.getAttribute("href")}`).focus();
  };

  renderNavbarLinks = () =>
    routes.map((route, index) => {
      if (route.label) {
        return (
          <li className="nav-item" key={index}>
            <NavLink
              exact
              className="navbar_link"
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
    return (
      <nav className="navbar navbar-expand-lg fixed-top" aria-label="site">
        <a
          className="skip_link"
          href="#mainContent"
          onClick={this.skipToMainContent}
        >
          Skip to main content
        </a>
        <a className="navbar-brand ml-5" href="/">
          <img
            src={Logo}
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
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto text-right">
            {this.renderNavbarLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}
