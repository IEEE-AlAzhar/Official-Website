import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import routes from "globals/routes";
import { ThemeProvider } from "globals/contexts/theme.context";

import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

export default class SideDrawer extends Component {
  static contextType = ThemeProvider;

  renderNavbarLinks = () =>
    routes.map((route, index) => {
      if (route.label) {
        return (
          <li
            className={`${styles["side-drawer__item"]} text-center`}
            key={index}
          >
            <NavLink
              exact
              className={styles["side-drawer__link"]}
              activeClassName={styles["side-drawer__link--active"]}
              to={route.path}
              id="sideDrawerLink"
              tabIndex={this.props.isOpened ? "0" : "-1"}
            >
              {route.label}
            </NavLink>
          </li>
        );
      } else {
        return "";
      }
    });
  componentWillUnmount() {
    console.log("side unmounted");
  }

  render() {
    let { isOpened, closeSideDrawer } = this.props;
    const { theme, toggle } = this.context;

    return (
      <section
        className={`${styles["side-drawer"]} ${
          isOpened ? styles["side-drawer--opened"] : ""
        }`}
      >
        <button
          className={styles["side-drawer__closer"]}
          onClick={closeSideDrawer}
          type="button"
          aria-label="Toggle side drawer"
          title="Close Side Menu"
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
        <ul className={`${styles["side-drawer__list"]} list-unstyled`}>
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
      </section>
    );
  }
}
