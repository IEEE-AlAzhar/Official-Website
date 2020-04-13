import React, { Component } from "react";
import Layout from "shared/layout";

import { Helmet } from "react-helmet";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title> IEEE Al-Azhar </title>

          <meta
            name="description"
            content="IEEE is a student activity that aims to teach students and train them on different fields"
          />
        </Helmet>
        <Layout>
          <h1>Home page is ready !</h1>
        </Layout>
      </>
    );
  }
}
