import React, { Component } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class FilterSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterString: "",
        };
    }
    onTextChange = (Value) => {
        console.log(Value);
        this.setState({ filterString: Value });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.filterString);
        this.props.searchCatogery(this.state.filterString);
    };
    render() {
        return (
            <div className={`col-6 ${styles['searchCatogery_componant']}`}>
                <form onSubmit={this.onFormSubmit} className={styles['searchCatogery-componant__form']}>
                    <input
                        type="text"
                        onChange={(event) => this.onTextChange(event.target.value)}
                        className={` ${styles['searchCatogery-componant__input']}`}
                        placeholder="What are you looking for? "
                        aria-label="Search"
                    />
                    <span className={styles['searchCatogery-componant__sideSearch']}>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className={styles['searchCatogery-componant__icon']}
                        />
                    </span>
                </form>
            </div>
        );
    }
}