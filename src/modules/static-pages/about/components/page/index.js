import React from "react";

import AboutHeader from "./components/header";
import IEEESection from "./components/IEEESection";
import IEEEAZHARSection from "./components/IEEEAZHARSection";
import Structure from "./components/structure";

import Layout from "shared/layout/index";

import { Helmet } from "react-helmet";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title> About us | IEEE Al-Azhar </title>
      </Helmet>
      <Layout>
        <div className="container">
          <AboutHeader />
          <IEEESection />
          <IEEEAZHARSection />
          <Structure />
        </div>
      </Layout>
    </>
  );
}
export default AboutPage;
