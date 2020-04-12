import React, { useEffect, useRef } from "react";
import "./PublicIEEESec.css";
import IEEEPubLogo from "./../../../../../../../assets/IEEE-pub-logo.jpg";
function PublicIEEESec() {
  const publogo = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true) {
        publogo.current.innerHTML = `<img src=${IEEEPubLogo} / >`;
      }
    });
    observer.observe(publogo.current);
  });
  return (
    <>
      <section className="pub-IEEE-sec">
        <h2>IEEE-AZAHAR</h2>
        <div className="content-pubIEEE">
          <div className="IEEEPubLogo" ref={publogo}></div>
          <div className="IEEEPubpara">
            <p>
              Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio
              mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es
              massa vestibulum malesuada, integer vivamus elit eu mauris eus,
              cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer
              vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur
              aliquam pharetra eget.elitelitelitLorem ipsum dolor sit amet,
              sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu,
              urna praesent at id quisque ac. Arcu es massa vestibulum
              malesuada, integer vivamus elit eu mauris eus, cum eros quis
              aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit
              eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra
              eget.elitelitelit
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default PublicIEEESec;
