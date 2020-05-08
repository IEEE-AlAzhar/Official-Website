import React, { Component } from "react";
import { getCategoriesNames } from "../../../services/blog.service";

import styles from "./style.module.css";

export default class FilterCategory extends Component {
    state = {
        catogeriesName: [],
    };
    componentDidMount() {
        getCategoriesNames().then((response) => {
            this.setState({ catogeriesName: response.data });
        });
    }
    handleChangeCategory = (event) => {
        const { CategoryFiltration } = this.props;
        CategoryFiltration(event.target.value);
    };

    render() {
        const { catogeriesName } = this.state;
        return (
            <div className={`col-lg-6 col-md-6 col-sm-12" `}>
                <form className={styles['Categories_filtration__form']}>
                    <select
                        className={styles["Categories_filtration__select"]}
                        onChange={this.handleChangeCategory}
                    >
                        <option>Choose a Category blogs</option>
                        {
                            catogeriesName.map((category, index) => (
                                <option
                                    key={index}
                                    value={category.categoryId}
                                >
                                    {category.categoryName.toUpperCase()}
                                </option>)
                            )
                        }
                    </select>
                </form>
            </div>
        );
    }
}