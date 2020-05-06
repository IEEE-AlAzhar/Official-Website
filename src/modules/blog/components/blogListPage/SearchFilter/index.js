import React, { Component } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchCatogeries extends Component {
    state = {
        searchField: "",
    };
    onTextChange = (value) => {
        this.setState({ searchField: value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const { searchCatogeries } = this.props;
        const { searchField } = this.state;
        searchCatogeries(searchField);
    };
    render() {
        return (
            <div className={`col-lg-6 col-md-6 col-sm-12" ${styles["search__Filtration"]}`}>
                <form
                    onSubmit={this.onFormSubmit}
                    className={styles["search-Filtration__form"]}
                >
                    <input
                        type="text"
                        value={this.state.searchField}
                        onChange={(event) => this.onTextChange(event.target.value)}
                        className={` ${styles["search-Filtration__input"]}`}
                        placeholder="What are you looking for? "
                        aria-label="Search"
                    />
                    <span
                        onClick={this.onFormSubmit}
                        className={styles["search-Filtration__sideInput"]}
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            className={styles["search-Filtration__icon"]}
                        />
                    </span>
                </form>
            </div>
        );
    }
}