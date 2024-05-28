import React from 'react';

function About() {
  return (
    <section className="tc-about-style3">
      <div className="top-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="info">
                <h5 className="fsz-30 text-uppercase mb-80"> Từ 2019 </h5>
                <div className="text fsz-18 mb-15">
                Công ty tiên phong trong lĩnh vực kiến trúc, xây dựng, sản xuất nội thất và công nghệ, 
                đem đến giải pháp toàn diện từ thiết kế đến thi công, kết hợp hoàn hảo giữa nghệ thuật, 
                kỹ thuật và công nghệ.
                </div>
                <div className="text fsz-18 mb-15">
                Sau hành trình phát triển từ năm 2019, với sứ mệnh đổi mới không gian sống và làm việc, 
                Nex Holding đã không ngừng nghiên cứu và phát triển, áp dụng những công nghệ tiên tiến nhất vào từng dự án của mình.
                </div>
                <a
                  href="/AboutPage"
                  className="butn borderd mt-70 bg-white py-2 px-3 text-uppercase ltspc-1 hover-bg-yellow1"
                >
                  <span>
                    Giải pháp công nghệ <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="numbers-boxes">
                <div
                  className="sm-card js-splittext-lines"
                  data-speed="1"
                  data-lag="0.4"
                >
                  <h4 className="fsz-70 mb-30"> 8 </h4>
                  <p className="p text-uppercase">
                    giải thưởng <br /> trong nước & quốc tế
                  </p>
                </div>
                <div
                  className="md-card js-splittext-lines"
                  data-speed="1"
                  data-lag="0.8"
                >
                  <h3 className="fsz-90 mb-90 fw-500"> 4 </h3>
                  <p className="p text-uppercase">
                    Công ty <br /> Thành viên
                  </p>
                </div>
                <div
                  className="lg-card js-splittext-lines"
                  data-speed="1"
                  data-lag="0.2"
                >
                  <h2 className="fw-500"> 5 </h2>
                  <h6 className="text-uppercase text-end fsz-18 lh-4">
                  năm <br /> phát triển
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/home3_construction/assets/img/about_pat.png"
          alt=""
          className="pattern"
        />
      </div>
      <div className="img-content wow">
        <img
          src="/home3_construction/assets/img/about.jpg"
          alt=""
          className="img-cover main-img"
        />
      </div>
    </section>
  );
}

export default About;
