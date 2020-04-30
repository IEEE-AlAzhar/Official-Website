import React, { Component } from "react";
import styles from "./style.module.css";
import { Redirect } from "react-router";
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
    status: false,
  };
  componentDidMount = () => {
    getBlogs().then((res) => {
      const blog = res.data.find(
        (blog) => blog.id === this.props.match.params.id
      );
      if (blog) {
        this.setState({ blog: { blog }, status: true });
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
              <div className="mt-5 py-5 ">
                <h1 className={styles[`blog-title`]}>{title}</h1>
                <p className={styles[`blog-created`]}>{createdAt}</p>
              </div>
            </header>
            <section className="row ">
              <div
                className={`mt-5 py-5 col-lg-3 ${
                  styles[`blog-personaldetails`]
                }`}
              >
                <ul className={styles[`blog-personaldetails__list`]}>
                  <li>
                    {this.state.blog.categories
                      ? categories.map((categorie) => {
                          return categorie.categoryName;
                        })
                      : null}
                  </li>
                  <li>{author}</li>
                  <li>
                    <a href={authorFacebook}>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={styles[`social-links`]}
                      />
                    </a>
                    <a href="#">
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
              </div>
              <div className="mt-5 py-5 col-lg-9">
                <p>{body}</p>
              </div>
            </section>
          </div>
        ) : (
          <>
            <Redirect to={"/not-found"} />
          </>
        )}
      </>
    );
  }
}
