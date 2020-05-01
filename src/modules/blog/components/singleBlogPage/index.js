import React, { Component } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { getBlogs } from "modules/blog/services/blog.service";
export default class SingleBlogPage extends Component {
  state = {
    blog: {},
  };
  componentDidMount = () => {
    getBlogs().then((res) => {
      const blog = res.data.find(
        (blog) => blog.id === this.props.match.params.id
      );
      if (blog) {
        this.setState({ blog: blog });
        console.log(this.state);
      } else {
        this.props.history.push("/not-found");
      }
    });
  };
  render() {
    const {
      cover,
      title,
      categories,
      author,
      authorFacebook,
      body,
      createdAt,
    } = this.state.blog;
    return (
      <>
        {this.state.status ? (
          <div className="container">
            <header className="row justify-content-center">
              <div className=" col-lg-12 ">
                <h1 className={`text-center ${styles[`blog-title`]}`}>
                  {title}
                </h1>
                <p className={` text-center ${styles[`blog-created`]}`}>
                  {createdAt}
                </p>
                <img
                  src={cover}
                  alt="blog cover"
                  className="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-md-2"
                />
              </div>
            </header>
            <section className="row">
              <div
                className={`mt-5 py-5 col-lg-2 col-md-12 col-sm-12 justify-content-center ${
                  styles[`blog-personaldetails`]
                }`}
              >
                {window.innerWidth <= 1200 ? <hr /> : null}
                <ul
                  className={`text-center ${
                    styles[`blog-personaldetails__list`]
                  }`}
                >
                  <li className={styles[`blog-personaldetails__item`]}>
                    {this.state.blog.categories
                      ? categories.map((categorie) => {
                          return categorie.categoryName + ",";
                        })
                      : null}
                  </li>
                  <br />
                  <li className={styles[`blog-personaldetails__item`]}>
                    {author}
                  </li>
                  <br />
                  <li className={styles[`blog-personaldetails__item`]}>
                    <a href={authorFacebook} target="_blank">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={styles[`social-links`]}
                      />
                    </a>
                    <a href="#" target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles[`social-links`]}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={styles[`social-links`]}
                      />
                    </a>
                  </li>
                </ul>
                {window.innerWidth <= 1200 ? <hr /> : null}
              </div>
              <div className="mt-5 py-5 col-lg-10 col-md-12 col-sm-12">
                <p>{body}</p>
              </div>
            </section>
          </div>
        ) : null}
      </>
    );
  }
}
