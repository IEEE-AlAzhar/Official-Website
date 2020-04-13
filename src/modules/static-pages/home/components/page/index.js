import React, { Component } from "react";
import Layout from "shared/layout";
<<<<<<< HEAD
import Intro from '../intro/index'
import AboutSection from 'modules/static-pages/about/components/section/index'
=======
import BestMembers from "../bestMembers";

import { Helmet } from "react-helmet";
>>>>>>> 05793b0f91340c419163b88928c3931cfc59d873

export default class HomePage extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Layout>
         <Intro  title="IEEE AL-AZHAR"  
                 subtitle=" Our Mission: Raising the Name of Al-Azhar University"
           />
           <AboutSection />
      </Layout>
=======
      <>
        <Helmet>
          <title> IEEE Al-Azhar </title>

          <meta
            name="description"
            content="IEEE Al-Azhar is a student activity in Al-Azhar university that aims to teach students and train them on different fields"
          />
        </Helmet>
        <Layout>
          <h1>Home page is ready !</h1>
          <BestMembers />
        </Layout>
      </>
>>>>>>> 05793b0f91340c419163b88928c3931cfc59d873
    );
  }
}
