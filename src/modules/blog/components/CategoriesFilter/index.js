import React, { Component } from "react";

import CategoryService from "modules/blog/services/category.service";

import styles from "./style.module.css";

export default class FilterCategory extends Component {
  state = {
    categories: [],
  };

  constructor(props) {
    super(props);
    this._categoryService = new CategoryService();
  }

  componentDidMount() {
    this._categoryService.list().then((response) => {
      this.setState({ categories: response });
    });
  }

  handleChangeCategory = (categoryId) => {
    const { filterCategories } = this.props;
    filterCategories(categoryId);
  };

  render() {
    const { categories } = this.state;
    return (
      <ul className={`list-unstyled d-flex flex-wrap my-5`}>
        {categories.length > 0 && (
          <>
            <li
              tabIndex="0"
              className={styles.category}
              onClick={this.handleChangeCategory.bind(this, "all")}
            >
              All
            </li>
            {categories.map((category) => (
              <li
                key={category._id}
                tabIndex="0"
                className={styles.category}
                onClick={this.handleChangeCategory.bind(this, category._id)}
              >
                {category.name}
              </li>
            ))}
          </>
        )}
      </ul>
    );
  }
}
