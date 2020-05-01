import React, { Component } from "react";

import notFoundImage from "assets/images/page_not_found.svg";
import styles from "./style.module.css";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className={styles.notFound}>
        <article>
          <section className={styles.notfound__text}>
            <p>
              <span className="text-red"> Oops! </span> This is awkward... You
              are looking for something that doesn't exist.
            </p>
          </section>

          <section className={styles.notfound__image}>
            <img src={notFoundImage} alt="" />
          </section>

          <section className={styles.notfound__link}>
            <a href="/"> Go back my friend, Go back </a>
          </section>
        </article>
      </div>
    );
  }
}
