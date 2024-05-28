import React from 'react';

function Services() {
  return (
    <section className="tc-services-style3">
      <div className="container">
        <div className="top-inf mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h5
                className="fsz-30 text-uppercase wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                Dịch vụ của chúng tôi
              </h5>
            </div>
            <div className="col-lg-4">
              <div
                className="text fsz-18 mt-4 mt-lg-0 pe-lg-5 wow fadeInUp slow"
                data-wow-delay="0.4s"
              >
                NEX là nền tảng phần mềm trực tuyến giúp ngành xây dựng và đô thị thông minh quản lý dự án hiệu quả, 
                tăng cường hợp tác, tối ưu hóa quy trình, chia sẻ thông tin minh bạch và thúc đẩy phát triển bền vững.
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="text fsz-18 mt-4 mt-lg-0 wow fadeInUp slow"
                data-wow-delay="0.6s"
              >
                NEX là nền tảng phần mềm trực tuyến giúp ngành xây dựng và đô thị thông minh quản lý dự án hiệu quả, 
                tăng cường hợp tác, 
                tối ưu hóa quy trình, chia sẻ thông tin minh bạch và thúc đẩy phát triển bền vững.
              </div>
            </div>
          </div>
        </div>
        <div className="servives-cards">
          <div className="row gx-0">
            <div className="col-lg-4">
              <a
                href="#"
                className="service-card wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                <div className="num">
                  <span className="num-cir"> 1 </span>
                </div>
                <div className="img">
                  <img
                    src="/home3_construction/assets/img/services/ser1.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="info">
                  <p className="fsz-14 color-666"> 32 Dự án </p>
                  <h3 className="fsz-45 text-uppercase fw-500 mt-15">
                    nghỉ dưỡng
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="#"
                className="service-card wow zoomIn"
                data-wow-delay="0.2s"
              >
                <div className="num">
                  <span className="num-cir"> 2 </span>
                </div>
                <div className="img">
                  <img
                    src="/home3_construction/assets/img/services/ser2.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="info">
                  <p className="fsz-14 color-666"> 145 Dự án </p>
                  <h3 className="fsz-45 text-uppercase fw-500 mt-15">
                  Ngoại Thất
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-lg-2">
              <a
                href="#"
                className="service-card sm-card wow fadeInRight"
                data-wow-delay="0.8s"
              >
                <div className="num">
                  <span className="num-cir"> 3 </span>
                </div>
                <div className="img">
                  <img
                    src="/home3_construction/assets/img/services/ser3.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <div className="info">
                  <p className="fsz-14 color-666"> 263 Dự án </p>
                  <h3 className="fsz-45 text-uppercase fw-500 mt-15"> Nội Thất</h3>
                </div>
              </a>
              <a
                href="/PortfolioPage"
                className="all-card wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <span>
                  Tất cả <br /> Dự án <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
