import React, { Component } from "react";

import styles from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import NewsletterForm from "shared/newsletterForm";

export default class Footer extends Component {
  state = {
    socialLinks: [
      { icon: faFacebook, link: "https://www.facebook.com/IEEE.AlAzhar/" },
      {
        icon: faLinkedin,
        link: "https://www.linkedin.com/mwlite/company/ieee-al-azhar-sb",
      },
      { icon: faGithub, link: "https://github.com/IEEE-AlAzhar" },
    ],
  };

  renderSocialList = () =>
    this.state.socialLinks.map((socialItem, index) => (
      <li className="d-inline-block" key={index}>
        <a
          href={socialItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["social-list__link"]}
        >
          <FontAwesomeIcon icon={socialItem.icon} />
          <span className="sr-only">Social media icon</span>
        </a>
      </li>
    ));

  render() {
    return (
      <footer className="footer">
        <div className="d-sm-flex container justify-content-between">
          <NewsletterForm />

          <section className="text-center">
            <h2 className={styles["social-list__heading"]}> Follow us </h2>
            <ul className="list-unstyled">{this.renderSocialList()}</ul>
          </section>
        </div>
      </footer>
    );
  }
}
