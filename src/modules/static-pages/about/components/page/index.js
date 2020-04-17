import React from "react";

import { Helmet } from "react-helmet";

import Layout from "shared/layout/index";
import AboutHeader from "./components/header";
import IEEESection from "./components/IEEESection/index";
import Structure from "./components/structure/index";
import IEEEAZHARSection from "./components/IEEEAZHARSection/index";

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
