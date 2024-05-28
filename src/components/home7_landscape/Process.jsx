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
                      Giai đoạn này bao gồm việc thu thập thông tin và yêu cầu từ các bên liên quan, 
                      bao gồm cả cộng đồng và các nhóm lợi ích.
                      <br />
                      Phân tích và đánh giá các yếu tố như mục tiêu dự án, ngân sách, và các quy định pháp lý.
                      Tổ chức các cuộc họp và hội thảo để thảo luận và lấy ý kiến từ các bên liên quan.
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
                      Dựa trên thông tin đã thu thập, lập ra các phương án thiết kế sơ bộ, thường bao gồm nhiều lựa chọn khác nhau.<br />
                      Các phương án này sẽ được trình bày dưới dạng bản vẽ, mô hình, hoặc sử dụng công nghệ mô phỏng 3D để mô tả không gian và môi trường.<br />
                      Đánh giá tác động của từng phương án đối với môi trường, kinh tế và xã hội.
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
                      Sau khi phương án thiết kế sơ bộ được chấp thuận, bước tiếp theo là phát triển thiết kế kỹ thuật chi tiết. <br />
                      Các kỹ sư và chuyên gia sẽ làm việc trên các bản vẽ kỹ thuật, tính toán kỹ thuật và lập kế hoạch cho việc xây dựng hạ tầng.<br />
                      Cần phải xem xét đến việc tích hợp các hệ thống thông minh và bền vững vào thiết kế.
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
                      <span className="num"> 4. </span> Bảo vệ dự án thiết kế quy hoạch
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="text">
                      Giai đoạn cuối cùng là bảo vệ dự án trước các cơ quan quản lý, nhà đầu tư và cộng đồng. <br />
                      Chuẩn bị tài liệu và báo cáo chi tiết để trình bày về dự án, bao gồm cả lợi ích và tác động của dự án.<br />
                      Thảo luận và giải quyết các vấn đề phát sinh, nhận phản hồi và điều chỉnh dự án theo yêu cầu.
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
                  src="/home7_landscape/assets/img/proccess/prc1.jpg"
                  alt=""
                  className="prc-img current"
                />
                <img
                  id="tab-11"
                  src="/home7_landscape/assets/img/proccess/prc2.jpg"
                  alt=""
                  className="prc-img"
                />
                <img
                  id="tab-12"
                  src="/home7_landscape/assets/img/proccess/prc3.jpg"
                  alt=""
                  className="prc-img"
                />
                <img
                  id="tab-13"
                  src="/home7_landscape/assets/img/proccess/prc4.jpg"
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
