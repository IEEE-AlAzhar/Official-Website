import React, { Component } from "react";
import Header from "shared/header";
import Footer from "shared/footer";

import "./style.css";


export default class Layout extends Component {
  render() {
    let { children } = this.props;
    return (
      <>
        <Header />
        <main id="mainContent" tabIndex="-1">
          {children}
        </main>
        <Footer />
      </>
    );
  }
}
