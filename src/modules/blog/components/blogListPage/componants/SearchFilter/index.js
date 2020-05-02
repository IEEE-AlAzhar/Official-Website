import React, { Component } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchCatogeries extends Component {
    state = {
        searchField: "",
    };
    onTextChange = (value) => {
        console.log(value)
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
            <div className={`col-lg-6 col-md-6 col-sm-12" ${styles["searchCatogery_componant"]}`}>
                <form
                    onSubmit={this.onFormSubmit}
                    className={styles["searchCatogery-componant__form"]}
                >
                    <input
                        type="text"
                        value={this.state.searchField}
                        onChange={(event) => this.onTextChange(event.target.value)}
                        className={` ${styles["searchCatogery-componant__input"]}`}
                        placeholder="What are you looking for? "
                        aria-label="Search"
                    />
                    <span
                        onClick={this.onFormSubmit}
                        className={styles["searchCatogery-componant__sideSearch"]}
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            className={styles["searchCatogery-componant__icon"]}
                        />
                    </span>
                </form>
            </div>
        );
    }
}