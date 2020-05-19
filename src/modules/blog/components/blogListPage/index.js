import React, { Component } from "react";
import BlogCard from "./../blogCard/index";
import { Helmet } from "react-helmet";
import styles from "./style.module.css";
import CategoriesFilter from "../CategoriesFilter";
import SearchFilter from "../SearchFilter";

import BlogService from "modules/blog/services/blog.service";
import Loading from "shared/loading";

export default class BlogListPage extends Component {
  state = {
    blogs: [],
    isLoading: false,
  };

  constructor(props) {
    super(props);
    this._blogService = new BlogService();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ isLoading: true });
    this._blogService.list().then((response) => {
      this.setState({ blogs: response, isLoading: false });
    });
  }

  handelFiltration = (categoryId) => {
    this.setState({ isLoading: true });
    this._blogService.filter(categoryId).then((response) => {
      this.setState({ blogs: response, isLoading: false });
    });
  };

  handelSearch = (titleInputValue) => {
    this.setState({ isLoading: true });
    this._blogService.search(titleInputValue).then((response) => {
      this.setState({
        blogs: response,
        isLoading: false,
      });
    });
  };

  render() {
    const { blogs, isLoading } = this.state;
    return (
      <>
        <Helmet>
          <title>Blogs | IEEE Al-Azhar Student Branch</title>
        </Helmet>
        <h1 className={`${styles.blogs__heading} text-center mb-5`}>Blogs</h1>
        <div className="container">
          <section className={styles["blogs_filtration"]}>
            <SearchFilter searchCategories={this.handelSearch} />
            <CategoriesFilter filterCategories={this.handelFiltration} />
          </section>
          <div className="row">
            <section className={`col-lg-8 ${styles.blogs__list}`}>
              {isLoading ? (
                <Loading title="Loading Events ..." />
              ) : blogs.length > 0 ? (
                blogs.map((blog) => <BlogCard key={blog._id} data={blog} />)
              ) : (
                <p className="d-flex justify-content-center">
                  No Articles found
                </p>
              )}
            </section>
          </div>
        </div>
      </>
    );
  }
}
