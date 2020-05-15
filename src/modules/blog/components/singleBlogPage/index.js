import React, { Component } from "react";
import styles from "./style.module.css";
import { Helmet } from "react-helmet";

import BlogService from "modules/blog/services/blog.service";
import { parseDate } from "shared/services/date.service";
import Loading from "shared/loading";

export default class SingleBlogPage extends Component {
  state = {
    blog: {},
    isLoading: false,
  };

  constructor(props) {
    super(props);
    this._blogService = new BlogService();
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);

    const { match, history } = this.props;
    this.setState({ isLoading: true });
    this._blogService.getById(match.params.id).then((blog) => {
      if (blog) {
        this.setState({ blog, isLoading: false });
      } else {
        history.push("/404");
      }
    });
  };
  render() {
    const {
      cover,
      title,
      metaDescription,
      categories,
      authorName,
      authorProfileLink,
      body,
      createdAt,
    } = this.state.blog;
    let categoriesString =
      categories && categories.map((category) => category.name).join(", ");
    return (
      <>
        {!this.state.isLoading ? (
          <>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={metaDescription} />
              <meta property="og:title" content={title} />
              <meta property="og:url" content={window.location.origin} />
              <meta property="og:type" content="blog" />
              <meta property="og:description" content={metaDescription} />
              <meta property="og:image" content={cover} />
            </Helmet>
            <div className="container">
              <header className="row justify-content-center">
                <div className=" col-lg-12 ">
                  <h1 className={`text-center mb-3 ${styles[`blog-title`]}`}>
                    {title}
                  </h1>
                  <p className={`text-center ${styles[`blog-created`]}`}>
                    {parseDate(createdAt)}
                  </p>
                  <p className={`text-center ${styles[`blog-author`]}`}>
                    By{" "}
                    {authorProfileLink && (
                      <a
                        href={authorProfileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {authorName}
                      </a>
                    )}
                  </p>
                  <img
                    src={cover}
                    alt="blog cover"
                    className={`col-lg-12 ${styles["blog-image"]}`}
                  />
                </div>
              </header>
              <section className="row">
                <div className="mt-5 py-5 col-lg-10 col-md-12 col-sm-12">
                  <p dangerouslySetInnerHTML={{ __html: body }} />
                </div>
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
                      {categoriesString}
                    </li>
                  </ul>
                  {window.innerWidth <= 1200 ? <hr /> : null}
                </div>
              </section>
            </div>
          </>
        ) : (
          <div className="container">
            <Loading />
          </div>
        )}
      </>
    );
  }
}
