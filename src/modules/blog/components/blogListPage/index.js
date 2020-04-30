import React, { Component } from "react";
<<<<<<< HEAD
import Filtrition from './componants'
=======
import BlogCard from "./../blogCard/index";
import { Helmet } from "react-helmet";
import styles from "./style.module.css";
import { getBlogs } from "modules/blog/services/blog.service";
>>>>>>> deb7bdabd6e63e36399fe1a00665650043e2750a

export default class BlogListPage extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    getBlogs().then(({ data: blogs }) => this.setState({ blogs }));
  }

  render() {
<<<<<<< HEAD
    return (
      <div>
        <Filtrition />
      </div>
    )
=======
    const { blogs } = this.state;
    return (
      <>
        <Helmet>
          <title>Blogs</title>
        </Helmet>
        <h1 className={`${styles.blogs__heading} text-center`}>Blogs</h1>
        <div className="container">
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
>>>>>>> deb7bdabd6e63e36399fe1a00665650043e2750a
  }
}
