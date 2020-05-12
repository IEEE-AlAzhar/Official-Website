import React, { Component } from "react";
import MessageService from "modules/contact/services/contact.service";
import { isEmailValid, isValidText } from "shared/services/validation.service";

import styles from "./style.module.css";

const initialState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  nameError: "",
  phoneError: "",
  emailError: "",
  subjectError: "",
  messageError: "",
  sentSuccessfully: false,
  sentFaild: false,
};

class Form extends Component {
  constructor() {
    super();
    this.state = initialState;

    this._messageService = new MessageService();
  }

  validate = () => {
    const { name, phone, email, subject, message } = this.state;
    let { nameError, phoneError, emailError, subjectError, messageError } = "";

    if (!name) {
      nameError = "Please enter your name";
    } else if (!isValidText(name)) {
      nameError = "Only characters are allowed";
    }

    if (!email) {
      emailError = "Please enter email";
    } else if (!isEmailValid(email)) {
      emailError = "Please enter a valid email";
    }

    if (!phone) {
      phoneError = "Please enter your phone number";
    }
    if (!subject) {
      subjectError = "Please enter message subject";
    }
    if (!message) {
      messageError = "Please enter your message";
    }

    if (nameError || phoneError || emailError || subjectError || messageError) {
      this.setState({
        nameError,
        phoneError,
        emailError,
        subjectError,
        messageError,
      });
      return false;
    }

    return true;
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { name, phone, email, subject, message } = this.state;
    const isValid = this.validate();
    if (isValid) {
      this._messageService
        .create({
          name,
          phone,
          email,
          subject,
          message,
        })
        .then(() => {
          this.setState({ sentSuccessfully: true });
        })
        .catch((err) => {
          this.setState({ sentFaild: true });
        });
    }
  };

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name + "Error"]: "" });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      nameError,
      phoneError,
      emailError,
      subjectError,
      messageError,
      sentFaild,
      sentSuccessfully,
    } = this.state;
    return sentSuccessfully ? (
      <section className="col-lg m-auto">
        <svg
          className="bi bi-check-circle"
          width="4em"
          height="4em"
          viewBox="0 0 16 16"
          fill="green"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-success">
          Thank you, your message has been sent successfully.
        </p>
      </section>
    ) : (
      <form className="col-md" onSubmit={this.onFormSubmit}>
        {sentFaild ? (
          <section>
            <small className="text-danger">
              Error sending the message, please try again later!
            </small>
          </section>
        ) : null}
        <section className="form-row my-3">
          <span className="col-md-6">
            <input
              onChange={this.inputChangeHandler}
              name="name"
              type="text"
              className="form-control rounded-pill"
              placeholder="Name"
              title="Only characters are allowed"
              aria-label="name"
            />
            <aside className="text-left">
              <small
                className={`text-danger ${styles["error-message"]}`}
                aria-live="assertive"
              >
                {nameError}
              </small>
            </aside>
          </span>
          <span className="col-md-6">
            <input
              onChange={this.inputChangeHandler}
              name="phone"
              type="tel"
              className={`form-control rounded-pill ${styles.phone}`}
              placeholder="Phone Number"
              aria-label="Phone"
            />
            <aside className="text-left">
              <small
                className={`text-danger ${styles["error-message"]}`}
                aria-live="assertive"
              >
                {phoneError}
              </small>
            </aside>
          </span>
        </section>
        <section className="form-group">
          <input
            onChange={this.inputChangeHandler}
            name="email"
            className="form-control rounded-pill"
            placeholder="Email"
            aria-label="Email"
          />
          <aside className="text-left">
            <small
              className={`text-danger ${styles["error-message"]}`}
              aria-live="assertive"
            >
              {emailError}
            </small>
          </aside>
        </section>
        <section className="form-group">
          <input
            onChange={this.inputChangeHandler}
            name="subject"
            type="text"
            className="form-control rounded-pill"
            placeholder="Subject"
            aria-label="Subject"
          />
          <aside className="text-left">
            <small
              className={`text-danger ${styles["error-message"]}`}
              aria-live="assertive"
            >
              {subjectError}
            </small>
          </aside>
        </section>
        <section className="form-group">
          <textarea
            onChange={this.inputChangeHandler}
            name="message"
            className="form-control rounded"
            rows="3"
            placeholder="Message here"
            aria-label="Message"
          />
          <aside className="text-left">
            <small
              className={`text-danger ${styles["error-message"]}`}
              aria-live="assertive"
            >
              {messageError}
            </small>
          </aside>
        </section>
        <input
          type="submit"
          className={`rounded-pill ${styles["send-btn"]}`}
          value="SEND"
          aria-label="Send"
        />
      </form>
    );
  }
}

export default Form;
