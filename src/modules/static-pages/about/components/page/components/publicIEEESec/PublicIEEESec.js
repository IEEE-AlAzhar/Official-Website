import React, { Component } from "react";
import publicSecStyles from "./PublicIEEESec.module.css";
import IEEEPubLogo from "./../../../../../../../assets/IEEE-pub-logo.jpg";
class PublicIEEESec extends Component {
  componentDidMount() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true) {
        this.publogo.current.innerHTML = `<img src=${IEEEPubLogo} class="${publicSecStyles.IEEEPubLogo__logo}" / >`;
      }
    });
    observer.observe(this.publogo.current);
  }
  render() {
    this.publogo = React.createRef();
    return (
      <>
        <section className={publicSecStyles.pub_IEEE_sec}>
          <h2 className={publicSecStyles.pub_IEEE_sec__heading}>IEEE-AZAHAR</h2>
          <div className={publicSecStyles.content_pubIEEE}>
            <div
              className={publicSecStyles.IEEEPubLogo}
              ref={this.publogo}
            ></div>
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
