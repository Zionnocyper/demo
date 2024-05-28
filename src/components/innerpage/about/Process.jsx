import React from 'react';

function Process() {
  return (
    <section className="tc-process-style2">
      <div className="container">
        <h2 className="fsz-45 fw-500 mb-80 text-center">
            Giới thiệu 
          <span className="sub-font fst-italic color-orange1 fw-400">
            Nex App
          </span>
        </h2>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="accordion-side wow fadeInUp slow">
                <div className="accordion" id="accordionProcess">
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span> <h3> Mô hình thông tin xây dựng (BIM) </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEX tích hợp mạnh mẽ công nghệ BIM, cho phép tạo ra mô hình 3D chi tiết của dự án, giúp quản lý thông tin hiệu quả, 
                        trực quan hóa và phân tích dữ liệu. NEX cho phép các bên liên quan cùng làm việc trên một mô hình chung, 
                        chia sẻ thông tin và cập nhật tiến độ dự án một cách minh bạch và hiệu quả.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span> <h3> Công nghệ đám mây </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEX được xây dựng trên nền tảng đám mây, cho phép truy cập thông tin từ bất kỳ đâu, bất kỳ lúc nào, 
                        đảm bảo tính minh bạch và cập nhật. Nền tảng đám mây giúp giảm thiểu chi phí đầu tư phần cứng và bảo trì, 
                        đồng thời nâng cao khả năng mở rộng và bảo mật dữ liệu.
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
                        <span className="num"> 3 / </span> <h3> Trí tuệ nhân tạo (AI): </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEX ứng dụng AI để tự động hóa các quy trình, giảm thiểu lỗi, 
                        nâng cao năng suất lao động và tối ưu hóa chi phí. AI hỗ trợ phân tích dữ liệu, 
                        dự báo và đưa ra quyết định chính xác và kịp thời.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                      >
                        <span className="num"> 4 / </span> <h3>  Thực tế ảo (VR) và Thực tế tăng cường (AR) </h3>
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEX tích hợp VR/AR để trực quan hóa mô hình 3D của dự án, 
                        giúp khách hàng dễ dàng hình dung và đánh giá thiết kế. 
                        VR/AR hỗ trợ đào tạo và huấn luyện nhân viên, nâng cao hiệu quả công việc.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/ContactPage"
                  className="butn bg-white rounded-pill mt-50 hover-bg-black"
                >
                  <span>
                    Liên hệ chúng tôi
                    <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="imgs">
                <div className="img" data-lag="0.2">
                  <img
                    src="/innerpages/assets/img/process/proc1.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Design </span>
                </div>
                <div className="img" data-lag="0.4">
                  <img
                    src="/innerpages/assets/img/process/proc2.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Handover </span>
                </div>
                <div className="img" data-lag="0.3">
                  <img
                    src="/innerpages/assets/img/process/proc3.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Survey </span>
                </div>
                <div className="img" data-lag="0.5">
                  <img
                    src="/innerpages/assets/img/process/proc4.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Implement </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/prc_bg.png"
        alt=""
        className="bg"
        data-speed="1.2"
      />
    </section>
  );
}

export default Process;
