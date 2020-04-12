import React, { Component } from "react";
import structurestyles from "./IEEEStructure.module.css";
import IEEEStr767 from "./../../../../../../../assets/images/structure-650.jpg";
import IEEEStr1200 from "./../../../../../../../assets/images/structure-1200.jpg";
import IEEEStr2500 from "./../../../../../../../assets/images/structure-2500.jpg";

class IEEEStructure extends Component {
  componentDidMount() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true && window.innerWidth <= 767) {
        this.IEEEStrImg.current.innerHTML = `<img src=${IEEEStr767} class = "${structurestyles.IEEE_str_img__structureImg}"/ >`;
      } else if (entry.isIntersecting === true && window.innerWidth >= 1200) {
        this.IEEEStrImg.current.innerHTML = `<img src=${IEEEStr1200} class ="${structurestyles.IEEE_str_img__structureImg}"/ >`;
      } else if (entry.isIntersecting === true && window.innerWidth >= 2500) {
        this.IEEEStrImg.current.innerHTML = `<img src=${IEEEStr2500} class = "${structurestyles.IEEE_str_img__structureImg}" / >`;
      }
    });
    observer.observe(this.IEEEStrImg.current);
  }
  render() {
    this.IEEEStrImg = React.createRef();
    return (
      <>
        <section className={structurestyles.IEEE_str}>
          <div className={structurestyles.IEEE_Str_content}>
            <h1 className={structurestyles.IEEE_Str_content__heading}>
              IEEE Structure
            </h1>
            <div
              className={structurestyles.IEEE_str_img}
              ref={this.IEEEStrImg}
            ></div>
          </div>
        </section>
      </>
    );
  }
}

export default IEEEStructure;
