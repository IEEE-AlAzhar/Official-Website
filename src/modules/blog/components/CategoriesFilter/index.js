import React, { Component } from "react";
import { getCatogeriesNames } from "modules/blog/services/blog.service";

import styles from "./style.module.css";

export default class FilterCategory extends Component {
  state = {
    catogeriesNames: [],
  };
  componentDidMount() {
    getCatogeriesNames().then((response) => {
      this.setState({ catogeriesNames: response.data });
    });
  }
  handleChangeCategory = (event) => {
    const { filterCategories } = this.props;
    filterCategories(event.target.value);
  };

  render() {
    const { catogeriesNames } = this.state;
    return (
      <div
        className={`col-lg-6 col-md-6 col-sm-12" ${styles["Category_filtered"]}`}
      >
        <form>
          <select
            className={styles["searchCatogery-componant__select"]}
            onChange={this.handleChangeCategory}
          >
            <option>Choose a Category blogs</option>
            {catogeriesNames.map((category, index) => (
              <option
                className={styles["filtered"]}
                key={index}
                value={category.categoryId}
              >
                {category.categoryName.toUpperCase()}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}
