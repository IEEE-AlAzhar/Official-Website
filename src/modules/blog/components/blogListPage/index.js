import React, { Component } from "react";
import BlogCard from "./../blogCard/index";
import axios from "axios";
import { Helmet } from "react-helmet";
import styles from "./style.module.css";

export default class BlogListPage extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    axios
      .get("./data/blogs.json")
      .then(({ data: blogs }) => this.setState({ blogs }));
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Blogs</title>
        </Helmet>
        <h1 className={`${styles.blogs__heading} text-center`}>Blogs</h1>
        <div className="container">
          <div className="row">
            <section className={`col-lg-8 ${styles.blogs__list}`}>
              {this.state.blogs.map((blog) => (
                <BlogCard key={blog.id} data={blog} />
              ))}
            </section>
          </div>
        </div>
      </>
    );
  }
}
