import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./style.module.css";

export default class SideDrawer extends Component {
  render() {
    let { links, isOpened, closeSideDrawer } = this.props;
    return (
      <section
        className={`${styles["side-drawer"]} ${
          isOpened ? styles["side-drawer--opened"] : ""
        }`}
      >
        <button
          className={styles["side-drawer__closer"]}
          onClick={closeSideDrawer}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className={styles["side-drawer__list"]}>{links}</ul>
      </section>
    );
  }
}
