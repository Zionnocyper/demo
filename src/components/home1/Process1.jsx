import React from 'react';

function Process() {
  return (
    <section className="tc-process-style1">
      <div className="container">
        <div className="title mb-100 text-center">
          <h2 className="fsz-45"> THẾ MẠNH CỦA CHÚNG TÔI </h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="info">
                <div
                  className="accordion wow fadeInUp slow"
                  id="accordionProcess"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span>
                        <h3> CÔNG NGHỆ ĐỘT PHÁ </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEX là một giải pháp toàn diện tích hợp công nghệ BIM, VR/AR, AI giúp làm việc hiệu quả cho ngành xây dựng và đô thị thông minh. 
                        Nó giúp giải quyết các vấn đề chính của ngành, nâng cao hiệu quả quản lý thi công và quản lý tình trạng công trình sau thi công, 
                        hỗ trợ ra quyết định và thúc đẩy sự phát triển bền vững của đô thị.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span>
                        <h3> QUY TRÌNH CHUYÊN NGHIỆP </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        Quy trình thi công chuyên nghiệp, từ khâu tư vấn - thiết kế - thiết kế kỹ thuật đến hoàn thiện, 
                        đảm bảo chất lượng, tiến độ và an toàn, mang đến cho bạn một tổ ấm vững bền, đẹp như mơ ước.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        <span className="num"> 3 / </span> <h3> ĐỘI NGŨ GIÀU KINH NGHIỆM </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        Đội ngũ kiến trúc sư, kiến trúc sư quy hoạch, kỹ sư, quản lý dự án, 
                        giám sát có chuyên môn cao với kinh nghiệm lâu năm và đạt nhiều giải
                         thưởng trong nước và quốc tế chúng tôi tự tin sẽ là người bạn đồng hành đáng tin cậy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/Home3Page"
                  className="butn border rounded-pill mt-80 color-orange1 border-orange1 hover-bg-orange1"
                >
                  <span>
                    Giới Thiệu
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="img wow">
                <img
                  src="/home1/assets/img/process2.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line2.png" alt="" className="c-line wow" />
    </section>
    
  );
}

export default Process;
