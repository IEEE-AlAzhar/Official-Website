import React, { Component } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchFilter extends Component {
  state = {
    searchField: "",
  };

  onTextChange = (value) => {
    this.setState({ searchField: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { searchCategories } = this.props;
    const { searchField } = this.state;

    searchCategories(searchField);
  };

  render() {
    return (
      <div className={`ml-auto ${styles["searchCategory-component"]}`}>
        <form
          onSubmit={this.onFormSubmit}
          className={styles["searchCategory-component__form"]}
        >
          <input
            type="text"
            value={this.state.searchField}
            onChange={(event) => this.onTextChange(event.target.value)}
            className={` ${styles["searchCategory-component__input"]}`}
            placeholder="What are you looking for? "
            aria-label="Search"
          />
          <button
            onClick={this.onFormSubmit}
            className={styles["searchCategory-component__sideSearch"]}
          >
            <FontAwesomeIcon
              icon={faSearch}
              className={styles["searchCategory-component__icon"]}
            />
          </button>
        </form>
      </div>
    );
  }
}
