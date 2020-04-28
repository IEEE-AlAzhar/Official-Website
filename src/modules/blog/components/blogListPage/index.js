import React, { Component } from "react";
import BlogCard from "./../blogCard/index";
import axios from "axios";
import { Helmet } from "react-helmet";
import Pagination from "../../../../globals/pagination";
import styles from "./style.module.css";

export default class BlogListPage extends Component {
  state = {
    blogs: [],
    currentPage: 1,
    pageSize: 3,
  };

  componentDidMount() {
    axios
      .get("./data/blogs.json")
      .then(({ data: blogs }) => this.setState({ blogs }));
  }

  blogsRender = (currentPage, blogs, pageSize) => {
    return blogs.slice(
      currentPage * pageSize - pageSize,
      currentPage * pageSize
    );
  };

  handlePaginationClick = (page) => {
    let { currentPage } = this.state;
    currentPage = page > 0 ? page : currentPage + page || currentPage + 1;
    this.setState({ currentPage });
  };
  render() {
    const { currentPage, pageSize, blogs } = this.state;
    const blogsToRender = this.blogsRender(currentPage, blogs, pageSize);
    return (
      <>
        <Helmet>
          <title>Blogs</title>
        </Helmet>
        <h1 className={`${styles.blogs__heading} text-center`}>Blogs</h1>
        <div className="container">
          <div className="row">
            <section className={`col-lg-8 ${styles.blogs__list}`}>
              {blogsToRender.map((blog) => (
                <BlogCard key={blog.id} data={blog} />
              ))}
            </section>
          </div>
        </div>
        <Pagination
          blogsCount={this.state.blogs.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPaginationClick={this.handlePaginationClick}
        />
      </>
    );
  }
}
