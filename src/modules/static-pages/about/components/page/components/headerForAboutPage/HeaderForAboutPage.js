import React from "react";
import "./HeaderForAboutPage.css";
import { aboutHeaderVid } from "./../../../../../../../assets/about-header-vid.mp4";
function HeaderForAboutPage() {
  return (
    <>
      <header id="header-about">
        <h1 id="heading-about">IEEE-AZAHER</h1>
        <video controls>
          <source src={aboutHeaderVid} type="video/mp4" />
        </video>
      </header>
    </>
  );
}
export default HeaderForAboutPage;
