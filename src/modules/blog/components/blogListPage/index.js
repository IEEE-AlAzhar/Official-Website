import React, { Component } from "react";
import BlogCard from "./../blogCard/index";
import { Helmet } from "react-helmet";
import styles from "./style.module.css";
import { getBlogs } from "modules/blog/services/blog.service";
import FilterCategories from "./componants/FilterCategories";
import SearchCategories from "./componants/SearchCategories";
import { filterBlogs } from "../../services/blog.service";
import { SearchBlogs } from "../../services/blog.service"

export default class BlogListPage extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    getBlogs().then(({ data: blogs }) => this.setState({ blogs }));
  }
  handelFilterCategories = (categoryName) => {
    filterBlogs(categoryName).then((response) => {
      this.setState({ blogs: response.data });
      console.log(categoryName)
    });
  };
  handelSearchCategories = (titleInputValue) => {
    console.log("search categories" + titleInputValue)

    SearchBlogs(titleInputValue.toLowerCase()).then((response) => {
      this.setState({ blogs: response.data });
      console.log("search categories" + titleInputValue)

    });
  };

  render() {
    const { blogs } = this.state;
    return (
      <>
        <Helmet>
          <title>Blogs</title>
        </Helmet>
        <h1 className={`${styles.blogs__heading} text-center`}>Blogs</h1>
        <div className="container">
          <section className={styles['blogs_filtertion']}>
            <div className="row">
              <FilterCategories
                filterCategories={this.handelFilterCategories} />
              <SearchCategories
                searchCatogery={this.HandelSearchCatogery} />
            </div>
          </section>
          <div className="row">
            <section className={`col-lg-8 ${styles.blogs__list}`}>
              {blogs.map((blog) => (
                <BlogCard key={blog.id} data={blog} />
              ))}
            </section>
          </div>
        </div>
      </>
    );
  }
}