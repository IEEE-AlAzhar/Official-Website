import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Icon from "../icon/index";
import Form from "../form/index";

import styles from "./style.module.css";

class ContactPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Contact Us | IEEE Al-Azhar Student Branch </title>
        </Helmet>
        <div className="text-center modal-dialog-centered px-3 py-2">
          <section
            className={`row container px-1 py-4 mx-auto rounded ${styles["form-section__background"]}`}
          >
            <Icon />
            <div className={`mr-3 ${styles["vertical-line"]}`} />
            <Form />
          </section>
        </div>
      </>
    );
  }
}

export default ContactPage;
