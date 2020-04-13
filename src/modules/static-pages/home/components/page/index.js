import React, { Component } from "react";
import Layout from "shared/layout";
import BestMembers from "../bestMembers";

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <h1>Home page is ready !</h1>
        <BestMembers />
      </Layout>
    );
  }
}
