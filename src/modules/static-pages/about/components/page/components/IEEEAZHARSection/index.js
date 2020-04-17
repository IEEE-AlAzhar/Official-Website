import React, { Component } from "react";
import styles from "./style.module.css";
import LogoLight from "assets/images/logo.png";
import LogoDark from "assets/images/logo-white.png";
import { ThemeProvider } from "globals/contexts/theme.context.js";

class IEEESection extends Component {
  static contextType = ThemeProvider;

  render() {
    const { theme } = this.context;
    return (
      <>
        <section className={styles.AZA_IEEE_sec}>
          <h1 className={styles.AZA_IEEE_sec__heading}>IEEE-AZHAR</h1>
          <div className={styles.content_AZAIEEE}>
            <div className={styles.IEEEAZApara}>
              <p className={styles.IEEEAZApara__Azaparagraph}>
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
            <div className={styles.IEEEAZALogo}>
              <img
                src={theme === "light" ? LogoLight : LogoDark}
                className={styles.IEEEAZALogo__Azalogo}
                alt="IEEE - AZAHR logo"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default IEEESection;
