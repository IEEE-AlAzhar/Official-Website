import React, { Component } from "react";
import UpComingEvents from "./components/upComingEvents";
import Layout from "shared/layout/index";
export default class EventsListPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <UpComingEvents />
        </Layout>
      </>
    );
  }
}
