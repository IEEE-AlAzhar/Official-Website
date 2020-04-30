import React, { Component } from "react";

import Intro from "../intro";
import BestMembers from "../bestMembers";

import About from "modules/static-pages/about/components/section/index";
import EventSection from "modules/events/components/eventsSection";

import { Helmet } from "react-helmet";
import TeamServicesSection from "modules/teamServices/components/teamServicesSection";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title> IEEE Al-Azhar </title>

          <meta
            name="description"
            content="IEEE Al-Azhar is a student activity in Al-Azhar university that aims to teach students and train them on different fields"
          />
        </Helmet>
        <Intro
          title="IEEE AL-AZHAR"
          subtitle="Our Mission: Raising the Name of Al-Azhar University"
        />
        <About />
        <TeamServicesSection />
        <EventSection />
        <BestMembers />
      </>
    );
  }
}
