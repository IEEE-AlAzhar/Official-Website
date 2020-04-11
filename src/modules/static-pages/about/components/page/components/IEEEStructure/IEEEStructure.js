import React, { useEffect, useRef } from "react";
import "./IEEEStructure.css";
import IEEEStr767 from "./../../../../../../../assets/images/structure-650.jpg";
import IEEEStr1200 from "./../../../../../../../assets/images/structure-1200.jpg";
import IEEEStr2500 from "./../../../../../../../assets/images/structure-2500.jpg";

function IEEEStructure() {
  const IEEEStrImg = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === true && window.innerWidth <= 767) {
        IEEEStrImg.current.innerHTML = `<img src=${IEEEStr767} className = "structureImg"/ >`;
      } else if (entry.isIntersecting === true && window.innerWidth >= 1200) {
        IEEEStrImg.current.innerHTML = `<img src=${IEEEStr1200} className = "structureImg" / >`;
      } else {
        IEEEStrImg.current.innerHTML = `<img src=${IEEEStr2500} className = "structureImg" / >`;
      }
    });
    observer.observe(IEEEStrImg.current);
  });
  return (
    <>
      <section className="IEEE-str">
        <div className="IEEE_Str_content">
          <h2>IEEE Structure</h2>
          <div className="IEEE-str-img" ref={IEEEStrImg}></div>
        </div>
      </section>
    </>
  );
}
export default IEEEStructure;
