import React, { Component } from "react";
import Layout from "shared/layout";
import Intro from '../intro/index'
import AboutSection from 'modules/static-pages/about/components/section/index'

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
         <Intro  title="IEEE AL-AZHAR"  
                 subtitle=" Our Mission: Raising the Name of Al-Azhar University"
           />
           <AboutSection />
      </Layout>
    );
  }
}
