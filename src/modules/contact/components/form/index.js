import React, { Component } from "react";
import sendMessage from "../../services/contact.service";
import {
  EmailValid,
  firstNameValid,
  lastNameValid,
} from "../../services/validation.service";
import styles from "./style.module.css";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  firstNameError: "",
  lastNameError: "",
  phoneError: "",
  emailError: "",
  subjectError: "",
  messageError: "",
  sendingSuccess: false,
  sendingFailed: false,
};

class Form extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  validate = () => {
    const { firstName, lastName, phone, email, subject, message } = this.state;
    let {
      firstNameError,
      lastNameError,
      phoneError,
      emailError,
      subjectError,
      messageError,
    } = "";

    if (!firstName) {
      firstNameError = "Please enter your first name";
    } else if (!firstNameValid(firstName)) {
      firstNameError = "Only characters are allowed";
    }

    if (!lastName) {
      lastNameError = "Please enter your last name";
    } else if (!lastNameValid(lastName)) {
      lastNameError = "Only characters are allowed";
    }

    if (!email) {
      emailError = "Please enter email";
    } else if (!EmailValid(email)) {
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

    if (
      firstNameError ||
      lastNameError ||
      phoneError ||
      emailError ||
      subjectError ||
      messageError
    ) {
      this.setState({
        firstNameError,
        lastNameError,
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
    const { firstName, lastName, phone, email, subject, message } = this.state;
    const isValid = this.validate();
    if (isValid) {
      sendMessage({
        firstName,
        lastName,
        phone,
        email,
        subject,
        message,
      })
        .then((data) => {
          this.setState({ sendingSuccess: true });
        })
        .catch((err) => {
          this.setState({ sendingFailed: true });
        });
    }
  };

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name + "Error"]: "" });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      firstNameError,
      lastNameError,
      phoneError,
      emailError,
      subjectError,
      messageError,
      sendingFailed,
      sendingSuccess,
    } = this.state;
    return sendingSuccess 
    ? <section className="col-lg m-auto">
        <svg
          className="bi bi-check-circle"
          width="4em"
          height="4em"
          viewBox="0 0 16 16"
          fill="green"
          xmlns="http://www.w3.org/2000/svg">
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
    : <form className="col-md" onSubmit={this.onFormSubmit}>
        {
          sendingFailed ? (
            <section>
              <small className="text-danger">
                Error sending the message, please try again later!
              </small>
            </section>
          ) : null
        }
        <section className="form-row my-3">
          <span className="col">
            <input
              onChange={this.inputChangeHandler}
              name="firstName"
              type="text"
              className="form-control rounded-pill"
              placeholder="First name"
              title="Only characters are allowed."
              aria-label="First name"
            />
            <aside className="text-left">
              <small className={`text-danger ${styles["error-message"]}`}>
                {firstNameError}
              </small>
            </aside>
          </span>
          <span className="col">
            <input
              onChange={this.inputChangeHandler}
              name="lastName"
              type="text"
              className="form-control rounded-pill"
              placeholder="Last name"
              title="Only characters are allowed."
              aria-label="Last Name"
            />
            <aside className="text-left">
              <small className={`text-danger ${styles["error-message"]}`}>
                {lastNameError}
              </small>
            </aside>
          </span>
        </section>
        <section className="form-group">
          <input
            onChange={this.inputChangeHandler}
            name="phone"
            type="number"
            className={`form-control rounded-pill ${styles.phone}`}
            placeholder="Phone Number"
            aria-label="Phone"
          />
          <aside className="text-left">
            <small className={`text-danger ${styles["error-message"]}`}>
              {phoneError}
            </small>
          </aside>
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
            <small className={`text-danger ${styles["error-message"]}`}>
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
            <small className={`text-danger ${styles["error-message"]}`}>
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
            <small className={`text-danger ${styles["error-message"]}`}>
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
  }
}

export default Form;
