import React from 'react';

function Process() {
  return (
    <section className="tc-proccess-style7">
      <div className="container">
        <h2 className="fsz-60 text-center text-capitalize fw-400 mb-100 js-splittext-lines">
          Quy trình triển khai
        </h2>
        <div className="content">
          <div className="row gx-0">
            <div className="col-lg-5">
              <div
                className="accordion wow fadeInUp slow"
                data-wow-delay="0.2s"
                id="accordionExample"
              >
                <div className="accordion-item" data-tab="tab-10">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                    >
                      <span className="num"> 1. </span> Thu thập yêu cầu & tư vấn lập dự án quy hoạch
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="text">
                      Giai đoạn này đòi hỏi việc thu thập thông tin chi tiết từ khách hàng và các
                       bên liên quan để hiểu rõ nhu cầu và mong muốn của họ.
                       <br />
                      Phân tích địa điểm, thị trường, và các yếu tố môi trường để đảm bảo dự án phù hợp với 
                      ngữ cảnh địa phương và có khả năng thành công.
                      <br />
                      Tư vấn chuyên nghiệp để xác định phạm vi dự án, ngân sách, và lập kế hoạch chi tiết. 
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-tab="tab-11">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                    >
                      <span className="num"> 2. </span> Đưa ra phương án thiết kế sơ bộ
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="text">
                      Phát triển các ý tưởng thiết kế đầu tiên dựa trên yêu cầu đã thu thập, 
                      bao gồm cả việc lựa chọn phong cách kiến trúc và bố cục tổng thể của khu nghỉ dưỡng. <br />
                      Tạo ra các mô hình 3D hoặc bản vẽ để trực quan hóa ý tưởng cho khách hàng và các bên liên quan.<br />
                      Đánh giá sơ bộ về tác động môi trường và kinh tế của dự án.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-tab="tab-12">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                    >
                      <span className="num"> 3. </span> Triển khai thiết kế kỹ thuật & hạ tầng
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="text">
                      Phát triển các bản vẽ kỹ thuật chi tiết và các kế hoạch hạ tầng cần thiết cho việc xây dựng. <br />
                      Lập kế hoạch cho việc cung cấp dịch vụ và tiện ích như nước, điện, và giao thông. <br />
                      Xác định các yêu cầu kỹ thuật cho các công trình như bể bơi, spa, nhà hàng, và các tiện nghi khác.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-tab="tab-13">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                    >
                      <span className="num"> 4. </span> Thi công dự án
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="text">
                      Bắt đầu quá trình xây dựng thực tế dựa trên các kế hoạch và thiết kế đã được phê duyệt. <br />
                      Quản lý chặt chẽ tiến độ và chất lượng công trình để đảm bảo tuân thủ theo kế hoạch và ngân sách. <br />
                      Thực hiện kiểm tra và giám sát liên tục để đảm bảo an toàn và tuân thủ các quy định.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="/ContactPage"
                className="butn border rounded-pill border-green1 hover-bg-green1 text-capitalize color-green1 mt-80"
              >
                <span> Liên hệ với chúng tôi </span>
              </a>
            </div>
            <div className="col-lg-4 offset-lg-2 mt-5 mt-lg-0">
              <div className="img wow zoomIn slow" data-wow-delay="0.4s">
                <img
                  id="tab-10"
                  src="/home7_landscape/assets/img/proccess/prc01.jpg"
                  alt=""
                  className="prc-img current"
                />
                <img
                  id="tab-11"
                  src="/home7_landscape/assets/img/proccess/prc02.jpg"
                  alt=""
                  className="prc-img"
                />
                <img
                  id="tab-12"
                  src="/home7_landscape/assets/img/proccess/prc03.jpg"
                  alt=""
                  className="prc-img"
                />
                <img
                  id="tab-13"
                  src="/home7_landscape/assets/img/proccess/prc04.jpg"
                  alt=""
                  className="prc-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/home7_landscape/assets/img/curve2.png"
        alt=""
        className="curve"
      />
    </section>
  );
}

export default Process;
