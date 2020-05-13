import React, { Component } from "react";
import styles from "./style.module.css";

class PublicIEEESec extends Component {
  render() {
    return (
      <>
        <section className={styles.pub_IEEE_sec}>
          <h1 className={styles.pub_IEEE_sec__heading}>IEEE</h1>
          <div className={styles.content_pubIEEE}>
            <div className={styles.IEEEPubpara}>
              <p className={styles.IEEEPubpara__pupPragraph}>
                IEEE is the world’s largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
                IEEE and its members inspire a global community through its
                highly cited publications, conferences, technology standards,
                and professional and educational activities. IEEE has a dual
                complementary regional and technical structure with
                organizational units based on geography and technical focus. It
                manages a separate organizational unit (IEEE-USA) which
                recommends policies and implements programs specifically
                intended to benefit the members, the profession, and the public
                in the United States.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default PublicIEEESec;
