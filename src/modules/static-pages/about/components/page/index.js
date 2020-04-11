import React from "react";
import HeaderForAboutPage from "./components/headerForAboutPage/HeaderForAboutPage";
import PublicIEEESec from "./components/publicIEEESec/PublicIEEESec";
import IEEEAZAHARSec from "./components/IEEEAZAHARSec/IEEEAZAHARSec";
import IEEEStructure from "./components/IEEEStructure/IEEEStructure";
function AboutPage() {
  return (
    <>
      <HeaderForAboutPage />
      <PublicIEEESec />
      <IEEEAZAHARSec />
      <IEEEStructure />
    </>
  );
}
export default AboutPage;
