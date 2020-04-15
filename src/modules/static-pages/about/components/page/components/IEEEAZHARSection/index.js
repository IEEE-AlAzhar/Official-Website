import React, { Component } from "react";
import styles from "./style.module.css";
import LogoLight from "assets/images/logo.png";
import LogoDark from "assets/images/logo-white.png";
import { ThemeProvider } from "globals/contexts/theme.context.js";

class IEEEAZHARSection extends Component {
  static contextType = ThemeProvider;

  componentDidUpdate() {
    const { theme } = this.context;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true && theme === "light") {
        this.AZAlogo.current.innerHTML = `
          <img src=${LogoLight} alt= "" width="300" class="${styles.IEEEAZALogo__Azalogo}"/ >
        `;
      } else if (entry.isIntersecting === true && theme === "dark") {
        this.AZAlogo.current.innerHTML = `
          <img src=${LogoDark} alt= "" width="300" class="${styles.IEEEAZALogo__Azalogo}"/ >
        `;
      }
    });
    observer.observe(this.AZAlogo.current);
  }
  render() {
    this.AZAlogo = React.createRef();
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
            <div className={styles.IEEEAZALogo} ref={this.AZAlogo}></div>
          </div>
        </section>
      </>
    );
  }
}
export default IEEEAZHARSection;
