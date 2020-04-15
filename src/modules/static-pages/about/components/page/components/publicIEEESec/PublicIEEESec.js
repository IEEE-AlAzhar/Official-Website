import React, { Component } from "react";
import publicSecStyles from "./PublicIEEESec.module.css";
import IEEEPubLogolight from "./../../../../../../../assets/images/logo.png";
import IEEEPubLogodark from "./../../../../../../../assets/images/logo-white.png";
import { ThemeProvider } from "globals/contexts/theme.context";

class PublicIEEESec extends Component {
  static contextType = ThemeProvider;
  render() {
    const { theme } = this.context;
    return (
      <>
        <section className={publicSecStyles.pub_IEEE_sec}>
          <h1 className={publicSecStyles.pub_IEEE_sec__heading}>IEEE-AZAHAR</h1>
          <div className={publicSecStyles.content_pubIEEE}>
            <div>
              <img
                src={theme === "light" ? IEEEPubLogolight : IEEEPubLogodark}
                className={publicSecStyles.IEEEPubLogo__logo}
                alt="IEEE-logo"
              />
            </div>
            <div className={publicSecStyles.IEEEPubpara}>
              <p className={publicSecStyles.IEEEPubpara__pupPragraph}>
                Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac
                odio mauris justo. Luctus arcu, urna praesent at id quisque ac.
                Arcu es massa vestibulum malesuada, integer vivamus elit eu
                mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet
                suspendisse integer vivamus elit eu mauris hendrerit facilisi,
                mi mattis pariatur aliquam pharetra eget.elitelitelitLorem ipsum
                dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris
                justo. Luctus arcu, urna praesent at id quisque ac. Arcu es
                massa vestibulum malesuada, integer vivamus elit eu mauris eus,
                cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse
                integer vivamus elit eu mauris hendrerit facilisi, mi mattis
                pariatur aliquam pharetra eget.elitelitelit
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default PublicIEEESec;
