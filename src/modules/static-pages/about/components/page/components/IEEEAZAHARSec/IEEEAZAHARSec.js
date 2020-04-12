import React, { Component } from "react";
import AZAstyle from "./IEEEAZAHARSec.module.css";
import IEEEAZALogolight from "./../../../../../../../assets/images/logo.png";
import IEEEAZALogodark from "./../../../../../../../assets/images/logo-white.png";
import { ThemeProvider } from "globals/contexts/theme.context";

class IEEEAZAHARSec extends Component {
  static contextType = ThemeProvider;

  componentDidUpdate() {
    const { theme } = this.context;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true && theme === "light") {
        this.AZAlogo.current.innerHTML = `<img src=${IEEEAZALogolight} alt= "IEEE_alzaher_logo" class="${AZAstyle.IEEEAZALogo__Azalogo}"/ >`;
      } else if (entry.isIntersecting === true && theme === "dark") {
        this.AZAlogo.current.innerHTML = `<img src=${IEEEAZALogodark} alt= "IEEE_alzaher_logo" class="${AZAstyle.IEEEAZALogo__Azalogo}"/ >`;
      }
    });
    observer.observe(this.AZAlogo.current);
  }
  render() {
    this.AZAlogo = React.createRef();
    return (
      <>
        <section className={AZAstyle.AZA_IEEE_sec}>
          <h1 className={AZAstyle.AZA_IEEE_sec__heading}>IEEE-AZAHAR</h1>
          <div className={AZAstyle.content_AZAIEEE}>
            <div className={AZAstyle.IEEEAZApara}>
              <p className={AZAstyle.IEEEAZApara__Azaparagraph}>
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
            <div className={AZAstyle.IEEEAZALogo} ref={this.AZAlogo}></div>
          </div>
        </section>
      </>
    );
  }
}
export default IEEEAZAHARSec;
