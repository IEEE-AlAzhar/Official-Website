import React from "react";
import HeaderForAboutPage from './components/headerForAboutPage/HeaderForAboutPage';
import PublicIEEESec from './components/publicIEEESec/PublicIEEESec';
import IEEEAZAHARSec from './components/IEEEAZAHARSec/IEEEAZAHARSec';
function AboutPage()  {
  
    return (
    <>
        <HeaderForAboutPage />
        <PublicIEEESec />
        <IEEEAZAHARSec />
    </>
    )

    
}
export default AboutPage