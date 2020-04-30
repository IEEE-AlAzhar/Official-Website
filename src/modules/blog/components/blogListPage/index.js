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
  filterCategories = (data) => {
    console.log("Name", data);
    filterBlogs(data).then((response) => {
      console.log("lina: ", response);
      this.setState()
    });
  };
  searchCatogery(data) {
    console.log("Data from search components: ", data.toLowerCase());
    SearchBlogs(data).then((response) => {
      console.log("search: ", response);
      this.setState()
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
          <div className="row">
            <FilterCategories filterCategories={this.filterCategories} />
            <SearchCategories searchCatogery={this.searchCatogery} />
          </div>
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