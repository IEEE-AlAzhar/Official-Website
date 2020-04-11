import React, { Component } from "react";
import styles from "./style.module.css";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  subject: "",
  message: ""
}

class Form extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    fetch("https://Som3a.com/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  };

  inputChangeHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <form className="col-md" onSubmit={this.onFormSubmit}>
        <section className="form-row my-3">
          <span className="col">
            <input
              onChange={this.inputChangeHandler}
              id='firstName'
              type="text"
              className="form-control rounded-pill"
              placeholder="First name"
              title="Only characters are allowed."
              pattern="[A-Za-z]{1,}"      // Only characters are allowed..
              required
            />
          </span>
          <span className="col">
            <input
              onChange={this.inputChangeHandler}
              id='lastName'
              type="text"
              className="form-control rounded-pill"
              placeholder="Last name"
              title="Only characters are allowed."
              pattern="[A-Za-z]{1,}"      // Only characters are allowed..
              required
            />
          </span>
        </section>
        <section className="form-group">
          <input
            onChange={this.inputChangeHandler}
            id='phone'
            type="number"
            className={`form-control rounded-pill ${styles.phone}`}
            placeholder="Phone Number"
            required
          />
        </section>
        <section className="form-group">
          <input
            onChange={this.inputChangeHandler}
            id='email'
            type="email"
            className="form-control rounded-pill"
            placeholder="Email"
            required
          />
        </section>
        <section className="form-group">
          <input
            onChange={this.inputChangeHandler}
            id='subject'
            type="text"
            className="form-control rounded-pill"
            placeholder="Subject" 
            required
          />
        </section>
        <section className="form-group">
          <textarea
            onChange={this.inputChangeHandler}
            id='message'
            className="form-control rounded"
            rows="3"
            placeholder="Message here"
            required
          />
        </section>
        <input
          type="submit"
          className={`rounded-pill ${styles.sendBtn}`}
          value="SEND"
        />
      </form>
    );
  }
}

export default Form;