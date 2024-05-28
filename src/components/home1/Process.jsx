import React from 'react';

function Process() {
  return (
    <section className="tc-process-style1">
      <div className="container">
        <div className="title mb-100 text-center">
          <h2 className="fsz-45"> GIẢI PHÁP CÔNG NGHỆ </h2>
        </div>
        <div className="content">
          <div className="row">
          <div className="col-lg-4 offset-lg-2">
              <div className="img wow">
                <img
                  src="/home1/assets/img/process1.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
            </div>
           
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
                        <h3> 1. Mô hình thông tin xây dựng (BIM): </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEX tích hợp mạnh mẽ công nghệ BIM, cho phép tạo ra mô hình 3D chi tiết của dự án, 
                        giúp quản lý thông tin hiệu quả, trực quan hóa và phân tích dữ liệu. 
                        NEX cho phép các bên liên quan cùng làm việc trên một mô hình chung, 
                        chia sẻ thông tin và cập nhật tiến độ dự án một cách minh bạch và hiệu quả. 
                        NEX được xây dựng trên nền tảng đám mây, cho phép truy cập thông tin từ bất kỳ đâu, 
                        bất kỳ lúc nào, đảm bảo tính minh bạch và cập nhật.
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
                        <h3> 3. Trí tuệ nhân tạo (AI):  </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEX ứng dụng AI để tự động hóa các quy trình, giảm thiểu lỗi, 
                        nâng cao năng suất lao động và tối ưu hóa chi phí. 
                        AI hỗ trợ phân tích dữ liệu, dự báo và đưa ra quyết định chính xác và kịp thời. 
                        NEX tích hợp VR/AR để trực quan hóa mô hình 3D của dự án, 
                        giúp khách hàng dễ dàng hình dung và đánh giá thiết kế. 
                        VR/AR hỗ trợ đào tạo và huấn luyện nhân viên, nâng cao hiệu quả công việc.
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
                        <span className="num"> 3 / </span> <h3> 5. Phần mềm quản lý: </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        Quản lý thi công, bao gồm theo dõi tiến độ, quản lý vấn đề, quản lý chi phí và tài nguyên. 
                        Cung cấp các báo cáo chi tiết về tình trạng thi công, giúp đưa ra quyết định kịp thời và hiệu quả. 
                        Hỗ trợ quản lý các vấn đề phát sinh, giúp giải quyết vấn đề một cách nhanh chóng và hiệu quả. 
                        Quản lý vận hành, bao gồm quản lý tài sản, theo dõi tình trạng và bảo trì. 
                        Cung cấp các báo cáo chi tiết về tình trạng tài sản, hỗ trợ quản lý các hoạt động bảo trì.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/AboutPage"
                  className="butn border rounded-pill mt-80 color-orange1 border-orange1 hover-bg-orange1"
                >
                  <span>
                    Phần Mềm Quản Lý
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
