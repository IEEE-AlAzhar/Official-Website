import React, { Component } from "react";
import styles from "./style.module.css";
import LogoLight from "assets/images/logo.png";
import LogoDark from "assets/images/logo-white.png";
import { ThemeProvider } from "globals/contexts/theme.context.js";

class PublicIEEESec extends Component {
  static contextType = ThemeProvider;

  componentDidUpdate() {
    const { theme } = this.context;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true && theme === "light") {
        this.publogo.current.innerHTML = `<img src=${LogoLight} class="${styles.IEEEPubLogo__logo}" alt="" width="300" />`;
      } else if (entry.isIntersecting === true && theme === "dark") {
        this.publogo.current.innerHTML = `<img src=${LogoDark} class="${styles.IEEEPubLogo__logo}" alt="" width="300" />`;
      }
    });
    observer.observe(this.publogo.current);
  }
  render() {
    this.publogo = React.createRef();
    return (
      <>
        <section className={styles.pub_IEEE_sec}>
          <h1 className={styles.pub_IEEE_sec__heading}>IEEE</h1>
          <div className={styles.content_pubIEEE}>
            <div className={styles.IEEEPubLogo} ref={this.publogo}></div>
            <div className={styles.IEEEPubpara}>
              <p className={styles.IEEEPubpara__pupPragraph}>
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
