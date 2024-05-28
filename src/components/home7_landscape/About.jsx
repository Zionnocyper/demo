import React from 'react';

function About() {
  return (
    <section className="tc-about-style7">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3">
            <div className="rotate-box" data-speed="1" data-lag="0.4">
              <a
                href="#"
                className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase"
              >
                <svg className="textcircle" viewBox="0 0 500 500">
                  <defs>
                    <path
                      id="textcircle"
                      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    ></path>
                  </defs>
                  <text>
                    <textPath xlinkHref="#textcircle" textLength="900">
                      Nexsa - Nex Holding -
                    </textPath>
                  </text>
                </svg>
              </a>
              <img
                src="/innerpages/assets/img/ooo.jpg"
                alt=""
                className="icon"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <div className="text fsz-25 fw-500 mb-20">
              Với đội ngũ chuyên gia hàng đầu trong lĩnh vực quy hoạch đô thị và nghỉ dưỡng, 
              NEXSA không chỉ mang đến những thiết kế biệt thự cao cấp mà còn là những giải pháp quy hoạch toàn diện, 
              hài hòa với thiên nhiên và phù hợp với xu hướng phát triển bền vững của thế giới.
              </div>
              <div className="text fsz-25 fw-500 mb-20">
              Mỗi dự án do NEXSA thực hiện đều là sự kết hợp tinh tế giữa không gian xanh và kiến trúc hiện đại, 
              tạo nên những khu nghỉ dưỡng đẳng cấp, nơi mỗi khoảnh khắc nghỉ ngơi đều trở nên thật sự đặc biệt.
              </div>
              <a
                href="/ContactPage"
                className="butn border rounded-pill border-green1 hover-bg-green1 text-capitalize color-green1 mt-70"
              >
                <span> Liên hệ chúng tôi </span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="numbers mt-5 mt-lg-0">
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.4s"
              >
                <h2 className="numb"> 15 </h2>
                <small> Dự án quy hoạch đã hoàn thành </small>
              </div>
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.6s"
              >
                <h2 className="numb"> 25 </h2>
                <small> Dự án quy hoạch được diễn họa </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
