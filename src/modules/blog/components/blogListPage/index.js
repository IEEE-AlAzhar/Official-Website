import React, { Component } from "react";
import BlogCard from "./../blogCard/index";
import { Helmet } from "react-helmet";
import styles from "./style.module.css";
import { getBlogs } from "modules/blog/services/blog.service";
import CategoriesFilter from "./CategoriesFilter";
import SearchFilter from "./SearchFilter";
import { filterBlogs } from "../../services/blog.service";
import { SearchBlogs } from "../../services/blog.service"

export default class BlogListPage extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    getBlogs().then(({ data: blogs }) => this.setState({ blogs }));
  }
  handelCategoryFiltration = (categoryId) => {
    filterBlogs(categoryId).then((response) => {
      this.setState({ blogs: response.data });
    });
  };
  handelSearchFiltration = (titleInputValue) => {
    SearchBlogs(titleInputValue.toLowerCase()).then((response) => {
      this.setState({
        blogs: response.data
      });
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
              <SearchFilter
                searchFiltration={this.handelSearchFiltration} />
              <CategoriesFilter
                CategoryFiltration={this.handelCategoryFiltration} />
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