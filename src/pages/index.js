import * as React from "react";
import 'normalize.css';
import '../styles/App.scss';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import CallToAction from '../components/CallToAction';


const IndexPage = () => {
  return (
    <Layout>
        <Hero />
        <Portfolio />
        <About />
        <CallToAction />
    </Layout>
  );
};

export default IndexPage;
