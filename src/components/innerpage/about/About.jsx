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
                      Nex App - Nex Holding -
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
              NEX là một giải pháp toàn diện, mạnh mẽ và hiệu quả cho ngành xây dựng và đô thị thông minh. 
              Nó giúp giải quyết các vấn đề chính của ngành, nâng cao hiệu quả quản lý, 
              hỗ trợ ra quyết định và thúc đẩy sự phát triển bền vững của đô thị.
              </div>
              <div className="text fsz-25 fw-500 mb-20">
              NEX không chỉ là một phần mềm, mà là một nền tảng kết nối, chia sẻ và quản lý thông tin, 
              tạo nên một hệ sinh thái phát triển bền vững cho ngành xây dựng và đô thị thông minh.
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="numbers mt-5 mt-lg-0">
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.4s"
              >
                <h2 className="numb"> 20% </h2>
                <small> Các rủi ro được giảm thiểu trong triển khai dự án. </small>
              </div>
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.6s"
              >
                <h2 className="numb"> 30% </h2>
                <small> Tốc độ triển khai dự án được cải thiện. </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
