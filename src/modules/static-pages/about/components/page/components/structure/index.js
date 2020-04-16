import React, { Component } from "react";
import styles from "./style.module.css";
import IEEEStr767 from "assets/images/structure-650.jpg";
import IEEEStr1200 from "assets/images/structure-1200.jpg";
import IEEEStr2500 from "assets/images/structure-2500.jpg";

class Structure extends Component {
  componentDidMount() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true && window.innerWidth <= 767) {
        this.IEEEStrImg.current.innerHTML = `<img src=${IEEEStr767} class = "${styles.IEEE_str_img__structureImg}" alt="" />`;
      } else if (entry.isIntersecting === true && window.innerWidth >= 1200) {
        this.IEEEStrImg.current.innerHTML = `<img src=${IEEEStr1200} class ="${styles.IEEE_str_img__structureImg}" alt=""  />`;
      } else if (entry.isIntersecting === true && window.innerWidth >= 2500) {
        this.IEEEStrImg.current.innerHTML = `<img src=${IEEEStr2500} class = "${styles.IEEE_str_img__structureImg}" alt="" />`;
      }
    });
    observer.observe(this.IEEEStrImg.current);
  }
  render() {
    this.IEEEStrImg = React.createRef();
    return (
      <>
        <section className={styles.IEEE_str}>
          <div className={styles.IEEE_Str_content}>
            <h1 className={styles.IEEE_Str_content__heading}>Our Structure</h1>
            <div className={styles.IEEE_str_img} ref={this.IEEEStrImg}></div>
          </div>
        </section>
      </>
    );
  }
}

export default Structure;
