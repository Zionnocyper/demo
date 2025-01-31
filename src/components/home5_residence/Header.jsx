import React from 'react';

function Header() {
  return (
    <header className="tc-header-style5">
      <div className="container">
        <div className="main-content">
          <div className="title">
            <h1> Villa design </h1>
          </div>
          <h4 className="fsz-24 text-uppercase mt-30 lh-4">
            Nexsa <br /> Một thành viên của Nex Holding 
          </h4>
        </div>
        <div className="btm-content">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-2">
              <a
                href="#"
                className="circle-arrow wow zoomIn slow"
                data-wow-delay="0.2s"
              >
                <i className="far fa-long-arrow-down"></i>
              </a>
            </div>
            <div className="col-lg-5">
              <div className="float-imgs wow zoomIn slow" data-wow-delay="0.4s">
                <div className="row gx-0">
                  <div className="col-lg-6">
                    <a
                      href="https://www.youtube.com/watch?v=qYgdnM3BC3g"
                      className="video-card"
                      data-fancybox="video"
                    >
                      <span className="play-icon">
                        <i className="fat fa-play"></i>
                      </span>
                      <p className="text-uppercase">
                        video <br /> promotion
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="/PortfolioPage" className="img-card">
                      <img
                        src="/home5_residence/assets/images/header2.jpg"
                        alt=""
                        className="main-img img-cover"
                      />
                      <span className="play-icon">
                        <i className="fat fa-arrow-up-right"></i>
                      </span>
                      <p className="text-uppercase">
                        Tất cả <br /> Dự án
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
