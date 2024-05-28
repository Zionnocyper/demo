import React from 'react';
import Loader from '../../components/common/Loader';
import Footer from '../../components/innerpage/Footer';
import Menu from '../../components/innerpage/Menu';
import Navbar2 from '../../components/innerpage/Navbar2';
import StartButton from '../../components/home5_residence/StartButton';
import Project from '../../components/innerpage/single_project02/Project';
import Testimonials from '../../components/innerpage/single_project02/Testimonials';
import RelatedProjects from '../../components/innerpage/single_project02/RelatedProjects';
import Chat from '../../components/innerpage/single_project02/Chat';
import { Helmet } from 'react-helmet';

function SingleProject02() {
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
      <body className="inner-pages-style1 s-project-pg-style1">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar2 />
          <main>
            <Project />
            <Testimonials />
            <RelatedProjects />
            <Chat />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default SingleProject02;
