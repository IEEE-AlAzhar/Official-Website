import React, { Component } from "react";
import AZAstyle from "./IEEEAZAHARSec.module.css";
import IEEEAZALogo from "./../../../../../../../assets/IEEE-pub-logo.jpg";

class IEEEAZAHARSec extends Component {
  componentDidMount() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true) {
        this.AZAlogo.current.innerHTML = `<img src=${IEEEAZALogo} alt= "IEEE_alzaher_logo" class="${AZAstyle.IEEEAZALogo__Azalogo}"/ >`;
      }
    });
    observer.observe(this.AZAlogo.current);
  }
  render() {
    this.AZAlogo = React.createRef();
    return (
      <>
        <section className={AZAstyle.AZA_IEEE_sec}>
          <h2 className={AZAstyle.AZA_IEEE_sec__heading}>IEEE_AZAHAR</h2>
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
