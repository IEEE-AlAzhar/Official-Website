import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

const BlogCard = (props) => {
  const {
    id,
    author,
    createdAt,
    title,
    authorFacebookProfile,
    cover,
    body,
  } = props.data;

  const titleSlugify = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "-and-");
  };
  return (
    <article className={`row mt-5 ${styles.blog}`}>
      <section className="col-md-3 text-md-right text-left">
        <ul className="list-unstyled pt-5 d-flex flex-row-reverse d-md-block">
          <li className="px-md-0 px-3">
            <a
              href={authorFacebookProfile}
              rel="noreferrer noopener"
              target="_blank"
            >
              {author} <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li className="px-md-0 px-3">
            {new Date(`${createdAt}`).toGMTString().slice(5, 16)}{" "}
            <FontAwesomeIcon icon={faCalendarWeek} />
          </li>
        </ul>
      </section>
      <section className="col-md-9 d-flex">
        <div className={`card  ${styles["blog-card"]}`}>
          <Link title={title} to={`/blog/${id}/${titleSlugify(`${title}`)}`}>
            <img
              src={cover}
              className={`${styles["blog-card__image"]} card-img-top `}
              alt={title}
            />
          </Link>
          <div className={`card-body ${styles["blog__info"]}`}>
            <h2 className={`${styles.blog__title}`}>
              <Link
                title={title}
                to={`/blog/${id}/${titleSlugify(`${title}`)}`}
              >
                {title}
              </Link>
            </h2>
            <p className="card-text">{body.slice(0, 120).concat("....")}</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogCard;
