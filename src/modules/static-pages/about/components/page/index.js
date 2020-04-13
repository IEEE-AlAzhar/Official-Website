import React from "react";

import AboutHeader from "./components/header";
import IEEESection from "./components/IEEESection";
import IEEEAZHARSection from "./components/IEEEAZHARSection";
import Structure from "./components/structure";

import Layout from "shared/layout/index";

function AboutPage() {
  return (
    <Layout>
      <div className="container">
        <AboutHeader />
        <IEEESection />
        <IEEEAZHARSection />
        <Structure />
      </div>
    </Layout>
  );
}
export default AboutPage;
