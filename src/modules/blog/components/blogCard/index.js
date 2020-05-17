import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { parseDate } from "shared/services/date.service";
import { isArabic } from "shared/services/language.service";

const BlogCard = (props) => {
  const {
    _id,
    authorName,
    lang,
    createdAt,
    title,
    authorProfileLink,
    cover,
    metaDescription,
  } = props.data;
  let isDescArabic = isArabic(metaDescription);

  const titleSlugify = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "-and-");
  };
  return (
    <article className={`row mt-5`}>
      <section className="col-md-3 text-md-right text-left">
        <ul className="list-unstyled pt-5 d-flex flex-row-reverse d-md-block">
          <li className="px-md-0 px-3">
            <a
              href={authorProfileLink}
              rel="noreferrer noopener"
              target="_blank"
              className="profile-links"
            >
              {authorName} <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li className="px-md-0 px-3">
            {parseDate(createdAt)} <FontAwesomeIcon icon={faCalendarWeek} />
          </li>
        </ul>
      </section>
      <section className={`col-md-9 d-flex justify-content-right`}>
        <div
          className={`card border-0 ${lang === "Arabic" && "text-right"} ${
            styles["blog-card"]
          }`}
        >
          <Link to={`/blog/${_id}/${titleSlugify(`${title}`)}`}>
            <img
              src={cover}
              className={`${styles["blog-card__image"]} card-img-top `}
              alt={`${title}'s cover`}
            />
          </Link>
          <div className={`card-body ${styles["blog__info"]}`}>
            <h2>
              <Link to={`/blog/${_id}/${titleSlugify(`${title}`)}`}>
                {title}
              </Link>
            </h2>
            <p className={`${isDescArabic && "letter-spacing-none"} card-text`}>
              {metaDescription.split(" ").slice(0, 30).join(" ")}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogCard;
