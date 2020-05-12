import React, { Component } from "react";

import { isEmailValid } from "shared/services/validation.service";
import NewsLetterService from "shared/services/newsletter.service";

import styles from "./style.module.css";

export default class NewsletterForm extends Component {
  state = {
    email: "",
    msg: null,
  };

  constructor(props) {
    super(props);
    this._newsLetterService = new NewsLetterService();
  }

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

    this._newsLetterService
      .create({ email })
      .then(() => {
        this.setState({
          msg: { type: "success", body: "Email sent successfully" },
        });

        setTimeout(() => {
          this.setState({
            msg: null,
          });
        }, 3500);
      })
      .catch((err) => {
        this.setState({
          msg: {
            type: "error",
            body: err.response.data.msg,
          },
        });
        setTimeout(() => {
          this.setState({
            msg: null,
          });
        }, 3500);
      });
  };

  render() {
    let { email, msg } = this.state;

    return (
      <form
        className={`${styles["subscribe-form"]} mb-2`}
        onSubmit={this.subscribeToNewsLetter}
      >
        <label htmlFor="newsletter" className="d-block">
          Get our latest news
        </label>
        <div className="input-group">
          <input
            type="text"
            id="newsletter"
            className={`form-control ${styles["subscribe-form__input"]}`}
            placeholder="Type your email here"
            value={email}
            onChange={this.handleChange}
            name="email"
          />
          <div className="input-group-append">
            <button
              className={`btn ${styles["subscribe-form__btn"]}`}
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
        {msg && (
          <span
            className={msg.type === "error" ? "text-danger" : "text-success"}
          >
            <small aria-live="assertive">{msg.body}</small>
          </span>
        )}
      </form>
    );
  }
}
