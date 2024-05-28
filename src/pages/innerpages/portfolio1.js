import React from 'react';
import Loader from '../../components/common/Loader';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar2 from '../../components/innerpage/Navbar2';
import StartButton from '../../components/home5_residence/StartButton';
import Header from '../../components/innerpage/portfolio1/Header1';
import Cases from '../../components/innerpage/portfolio1/Cases1';
import LatestCases from '../../components/innerpage/portfolio1/LatestCases1';
import { Helmet } from 'react-helmet';

function PortfolioPage1() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet>
      <body className="inner-pages-style1 portfolio-pg-style1">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar2 />
          <Header />
          <main>
            <Cases />
            <LatestCases />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default PortfolioPage1;
