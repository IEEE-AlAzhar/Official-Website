import React from "react";
import HeaderForAboutPage from "./components/headerForAboutPage/HeaderForAboutPage";
import PublicIEEESec from "./components/publicIEEESec/PublicIEEESec";
import IEEEAZAHARSec from "./components/IEEEAZAHARSec/IEEEAZAHARSec";
import IEEEStructure from "./components/IEEEStructure/IEEEStructure";
import Layout from "./../../../../../shared/layout/index";
function AboutPage() {
  return (
    <>
      <Layout>
        <HeaderForAboutPage />
        <PublicIEEESec />
        <IEEEAZAHARSec />
        <IEEEStructure />
      </Layout>
    </>
  );
}
export default AboutPage;
