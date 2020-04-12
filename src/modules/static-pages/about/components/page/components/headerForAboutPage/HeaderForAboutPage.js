import React, { Component } from "react";
import headerstylesabout from "./HeaderForAboutPage.module.css";
import { aboutHeaderVid } from "./../../../../../../../assets/about-header-vid.mp4";

class HeaderForAboutPage extends Component {
  render() {
    return (
      <>
        <header className={headerstylesabout.header_about}>
          <h1 className={headerstylesabout.header_about__heading}>
            IEEE-AZAHER
          </h1>
          <video controls className={headerstylesabout.header_about__video}>
            <source src={aboutHeaderVid} type="video/mp4" />
          </video>
        </header>
      </>
    );
  }
}
export default HeaderForAboutPage;
