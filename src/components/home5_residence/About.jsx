import React from 'react';

function About() {
  return (
    <section className="tc-about-style5">
      <div className="container">
        <div className="content">
          <h2 className="about-title mb-150 js-splittext-lines">
            <span className="color-brown1">Premium class Villa</span>
            <br /> with five stars hotel services <br /> in your home
          </h2>
          <div className="main-content">
            <div className="row justify-content-between">
              <div className="col-lg-2 wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="text">
                  Chọn đẳng cấp <br /> chọn Nexsa <br />
                </div>
                <div className="logo-mo mt-60 th-160 op-4">
                  <img
                    src="/home5_residence/assets/images/logo_mo.png"
                    alt=""
                    className="img-contain"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img wow zoomIn slow" data-wow-delay="0.2s">
                  <img
                    src="/home5_residence/assets/images/header.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <h6 className="color-brown1 text-uppercase fsz-24 lh-4 js-splittext-lines">
                NEXSA VƯƠN LÊN TRÊN
                CẢNH QUAN ĐÔ THỊ VÀ
                TRỞ THÀNH MỘT PHÉP ẨN DỤ HỮU HÌNH
                CHO SỰ THÀNH CÔNG CỦA DỰ ÁN. <br />
                Với tiện nghi & dịch vụ, như một khách sạn 5 * ở các không gian sống của ngôi nhà. <br />
                Nexsa sẽ mang đến những trải nghiệm tuyệt vời nhất cho bạn tự do tận hưởng cuộc sống.
                </h6>
                <p
                  className="fsz-13 mt-40 wow zoomIn slow"
                  data-wow-delay="0.2s"
                >
                Với tiện nghi & dịch vụ, như một khách sạn 5 * ở các không gian sống của ngôi nhà. <br />
                Nexsa sẽ mang đến những trải nghiệm tuyệt vời nhất cho bạn tự do tận hưởng cuộc sống.
                </p>
                <a
                  href="/PortfolioPage"
                  className="butn border rounded-pill border-brown1 hover-bg-black text-uppercase bg-brown1 color-000 mt-100 wow fadeInUp slow"
                  data-wow-delay="0.3s"
                >
                  <span> Tất cả dự án </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/home5_residence/assets/images/about.png"
        alt=""
        className="float_img"
      />
      <span className="lg-txt js-title sub-font"> about </span>
    </section>
  );
}

export default About;
