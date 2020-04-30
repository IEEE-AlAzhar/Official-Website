import React, { Component } from "react";
import { getCategoryName } from '../../../../services/blog.service'

import styles from "./style.module.css";

export default class FilterCategory extends Component {
    state = {
        CategoryName: [],

    };
    componentDidMount() {
        getCategoryName().then((response) => {
            console.log("dada:", response);
            this.setState({ CategoryName: response.data });
        });
    }
    handleChangeCategory = (event) => {
        console.log(event.target.value);
        console.log("PROPS: ", this.props);
        this.props.filterCategories(event.target.value);

    };

    render() {
        const { CategoryName } = this.state;
        return (
            <div className={`col-6 ${styles['filteredCategory']}`}>
                <form >
                    <select className={styles['searchCatogery-componant__select']}
                        onChange={this.handleChangeCategory} >
                        <option value="" >
                            Choose a  Category blogs
                        </option>
                        {CategoryName.map((Category, index) => (
                            <option className={styles["filtered"]}
                                key={index} value={Category.CategoryName} >
                                {Category.categoryName.toUpperCase()}
                            </option>
                        ))}
                    </select>

                </form>
            </div >
        );
    }
}

