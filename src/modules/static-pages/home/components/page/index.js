import React, { Component } from "react";
import Layout from "shared/layout";
import Intro from '../intro/index'
export default class HomePage extends Component {
  render() {
    return (
      <Layout>
         <Intro  title="IEEE AL-AZHAR"  
                 subtitle=" Our Mission: Raising the Name of Al-Azhar University"
           />
      </Layout>
    );
  }
}
