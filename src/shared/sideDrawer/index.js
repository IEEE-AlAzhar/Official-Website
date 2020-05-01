import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import routes from "globals/routes";
import { ThemeProvider } from "globals/contexts/theme.context";

import styles from "./style.module.css";

import ThemeButton from "shared/theme-button";

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

  render() {
    let { isOpened, closeSideDrawer } = this.props;
    const { theme, toggle } = this.context;

    return (
      <section
        data-testid="side-drawer-menu"
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
          <ThemeButton toggle={toggle} theme={theme} />
        </div>
      </section>
    );
  }
}
