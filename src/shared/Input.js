import React, { Component } from "react";
import Is from "@flk/supportive-is";

export default class Input extends Component {
  state = {
    validationMessage: null,
  };

  // get all the input types to add attributes dynamically to the input
  inputTypes = {
    numericTypes: ["number"],
    textfulTypes: ["text", "email", "password", "tel"],
  };

  /**
   * Check if the type provided is a numeric number
   * it makes the input component accept min & max attributes
   */
  isNumericType = () => {
    return this.inputTypes.numericTypes.includes(this.props.type);
  };

  /**
   * Check if the type provided is a textful number
   * it makes the input component accept minLength & maxLength attributes
   */
  isTextFulType = () => {
    return this.inputTypes.textfulTypes.includes(this.props.type);
  };

  // check if the field is required
  isRequired = () => {
    return this.props.required;
  };

  // make the error message's position according to the errorPosition prop provided
  errorPosition = () => {
    return this.props.errorPosition === "top" ? "order-top" : "order-bottom";
  };

  /**
   * View the custom message provided by the user or view a custom message
   *
   * @param {string} role
   * @param {string} defaultMessage
   */
  customMessage = (role, defaultMessage) => {
    let { validationMessages } = this.props;
    return (validationMessages && validationMessages[role]) || defaultMessage;
  };

  errorMessage = null;

  validateEmpty = (field) => {
    // validate required input
    // check if the input is not empty
    if (this.isRequired() && Is.empty(field.value)) {
      // he didn't access this body
      this.errorMessage = this.customMessage(
        "empty",
        "This field is Required!"
      );
    }
  };

  validateEmail = (field) => {
    // check if the input value a valid email address
    // validate the email when the validation.errorMessage is null
    if (
      this.props.type === "email" &&
      this.state.validationMessage === null &&
      !Is.empty(field.value) &&
      !Is.email(field.value)
    ) {
      this.errorMessage = this.customMessage("email", "Invalid Email Address");
    }
  };

  matchFieldLength = (field) => {
    let { length } = this.props;

    // check if the value equals the length specified
    if (!Is.empty(field.value) && length && field.value.length !== length) {
      this.errorMessage = this.customMessage(
        "lengthMessage",
        `This field should be ${length} in length`
      );
    }
  };

  matchMinValue = (field) => {
    let { min } = this.props;
    if (this.isNumericType() && min && field.value < min) {
      this.errorMessage = this.customMessage(
        "minValueMessage",
        `The minimum value accepted is ${min}`
      );
    }
  };

  matchMaxValue = (field) => {
    let { max } = this.props;
    if (this.isNumericType() && max && field.value > max) {
      this.errorMessage = this.customMessage(
        "maxValueMessage",
        `The maximum value accepted is ${max}`
      );
    }
  };

  matchMinLength = (field) => {
    let { minLength } = this.props;
    if (this.isTextFulType() && minLength && field.value.length < minLength) {
      this.errorMessage = this.customMessage(
        "minLengthMessage",
        `The field should be at minimum ${minLength} characters `
      );
    }
  };

  matchMaxLength = (field) => {
    let { maxLength } = this.props;
    if (this.isTextFulType() && !!maxLength && field.value.length > maxLength) {
      this.errorMessage = this.customMessage(
        "maxLengthMessage",
        `The field should be maximum ${maxLength} characters `
      );
    }
  };

  hasExceededMaxDate = (dateProvided, maxDate) => {
    return new Date(dateProvided).getTime() > new Date(maxDate).getTime();
  };

  matchMaxDate = (field) => {
    let { maxDate } = this.props;

    if (
      this.isNumericType() &&
      !!maxDate &&
      this.hasExceededMaxDate(field.value, maxDate)
    ) {
      this.errorMessage = this.customMessage(
        "maxDateMessage",
        `The Date should be maximum ${maxDate}`
      );
    }
  };

  hasExceededMinDate = (dateProvided, minDate) => {
    return new Date(dateProvided).getTime() < new Date(minDate).getTime();
  };

  matchMinDate = (field) => {
    let { minDate } = this.props;

    if (
      this.isNumericType() &&
      !!minDate &&
      this.hasExceededMinDate(field.value, minDate)
    ) {
      this.errorMessage = this.customMessage(
        "maxDateMessage",
        `The Date should be minimum ${minDate}`
      );
    }
  };

  checkIntType = (field) => {
    if (this.props.type === "int" && !Is.int(+field.value)) {
      this.errorMessage = this.customMessage(
        "intType",
        `You should pass an integer number`
      );
    }
  };

  checkFloatType = (field) => {
    if (this.props.type === "float" && !Is.float(+field.value)) {
      this.errorMessage = this.customMessage(
        "floatType",
        `You should pass a float number`
      );
    }
  };

  matchTextPattern = (field) => {
    let { type, regPattern } = this.props,
      pattern = new RegExp(`${regPattern}`, "g");

    if (type === "text" && !pattern.test(field.value)) {
      this.errorMessage = this.customMessage(
        "matchPattern",
        `The string should match pattern provided`
      );
    }
  };

  // validate the field according to its type
  validateField = (e) => {
    let input = e.target,
      validationCollectedRules = [
        this.validateEmpty,
        this.validateEmail,
        this.matchFieldLength,
        this.matchMinValue,
        this.matchMinValue,
        this.matchMaxLength,
        this.matchMinLength,
        this.matchMaxDate,
        this.matchMinDate,
        this.checkIntType,
        this.checkFloatType,
        this.matchTextPattern,
      ];

    this.errorMessage = null;

    // validate according to the rules provided
    for (let rule of validationCollectedRules) {
      rule(input);
      if (this.errorMessage) break;
    }

    this.setState({
      validationMessage: this.errorMessage,
    });

    if (this.props.onInput) {
      this.props.onInput(e);
    }
  };

  isAcceptableProp = (prop) => {
    let acceptableProps = [
      "type",
      "required",
      "minLength",
      "maxLength",
      "length",
      "min",
      "validationMessages",
      "errorPosition",
      "minDate",
      "maxDate",
      "regPattern",
    ];
    return typeof prop !== "object" && !acceptableProps.includes(prop);
  };

  getAcceptedProps = () => {
    let obj = {};

    for (let prop in this.props) {
      if (
        typeof this.props[prop] === "function" ||
        this.isAcceptableProp(prop)
      ) {
        obj[prop] = this.props[prop];
      }
    }

    return obj;
  };

  addClass = (e) => {
    if (this.props.classes) {
      e.target.classList.add(this.props.classes);
    }
  };

  render() {
    let { type, options, classes } = this.props;

    return (
      <section className="input-wrapper">
        {this.state.validationMessage !== null && (
          <label className={`error ${this.errorPosition()}`}>
            {this.state.validationMessage}
          </label>
        )}

        {type === "select" ? (
          <select {...this.getAcceptedProps()}>
            {options &&
              options.map((option, idx) => (
                <option value={option} key={idx}>
                  {" "}
                  {option}{" "}
                </option>
              ))}
          </select>
        ) : type === "textarea" ? (
          <textarea
            {...this.getAcceptedProps()}
            className={`form-control ${classes}`}
            onInput={this.validateField}
          ></textarea>
        ) : (
          <input
            {...this.getAcceptedProps()}
            type={
              type === "int" || type === "float" || type === "number"
                ? "number"
                : type
            }
            className={`form-control ${classes}`}
            onInput={this.validateField}
          />
        )}
      </section>
    );
  }
}
