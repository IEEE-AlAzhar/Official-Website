import React, { Component } from "react";

import { isEmailValid } from "shared/services/validation.service";

import "./style.css";
import { sendEmail } from "shared/services/newsletter.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  state = {
    email: "",
    msg: null,
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
          className="socialList_link"
        >
          <FontAwesomeIcon icon={socialItem.icon} />
        </a>
      </li>
    ));

  handleChange = (e) => {
    this.setState({
      msg: null,
      [e.target.name]: e.target.value,
    });
  };

  subscribeToNewsLetter = (e) => {
    e.preventDefault();

    let { email } = this.state;
    if (!email) {
      return this.setState({
        msg: { type: "error", body: "Please type your email" },
      });
    } else if (!isEmailValid(email)) {
      return this.setState({
        msg: { type: "error", body: "Please enter a valid email" },
      });
    }

    sendEmail(email)
      .then(() => {
        this.setState({
          msg: { type: "success", body: "Email sent successfully" },
        });
      })
      .catch(() => {
        this.setState({
          msg: {
            type: "error",
            body: "An error occurred, please try again later",
          },
        });
      });
  };

  render() {
    let { email, msg } = this.state;

    return (
      <footer className="footer">
        <div className="d-sm-flex container justify-content-between">
          <form
            className="subscribe-form mb-2"
            onSubmit={this.subscribeToNewsLetter}
          >
            <label htmlFor="newsletter" className="d-block">
              Get our latest news
            </label>
            <div className="input-group">
              <input
                type="text"
                id="newsletter"
                className="form-control subscribe-form_input"
                placeholder="Type your email here"
                aria-label="Get our latest news"
                value={email}
                onChange={this.handleChange}
                name="email"
              />
              <div className="input-group-append">
                <button className="btn subscribe-form_btn" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
            {msg && (
              <span
                className={
                  msg.type === "error" ? "text-danger" : "text-success"
                }
              >
                <small>{msg.body}</small>
              </span>
            )}
          </form>

          <section className="text-center">
            <h2> Follow us </h2>
            <ul className="list-unstyled">{this.renderSocialList()}</ul>
          </section>
        </div>
      </footer>
    );
  }
}
