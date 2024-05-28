import React from 'react';

function Experience() {
  return (
    <section className="tc-process-style1">
      <div className="container">
        <div className="title mb-100 text-center">
          <h2 className="fsz-45"> VỀ CHÚNG TÔI </h2>
        </div>
        <div className="content">
          <div className="row">
          <div className="col-lg-4 offset-lg-2">
          <div class="video-container">
          <iframe width="853" height="480" src="https://www.youtube.com/embed/K8ZzCaWbiKo" title="Music for a Sushi Restaurant (acoustic)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        <h3> NEXHOLDING </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        Nex Holding tự tin khẳng định vị thế là người tiên phong về công nghệ trong ngành, 
                        mang đến cho khách hàng những không gian sống đầy cảm hứng và tiện nghi. 
                        Các thành viên của NEX HOLDING bao gồm NEXCON - NEXSA - AZT - WOODER.
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
                        <h3> NEXSA </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEXSA, với đội ngũ chuyên gia quy hoạch, 
                        chúng tôi tự tin mang đến những thiết kế biệt thự cao cấp và giải pháp quy hoạch toàn diện, 
                        hài hòa thiên nhiên, phù hợp xu hướng phát triển bền vững. 
                        Mỗi dự án là sự kết hợp tinh tế giữa không gian xanh và kiến trúc hiện đại, 
                        tạo nên những khu nghỉ dưỡng đẳng cấp, nơi mỗi khoảnh khắc nghỉ ngơi trở nên đặc biệt.
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
                        <span className="num"> 3 / </span>
                        <h3> NEXCON </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                        NEXCON là người bạn đồng hành tin cậy trong mọi dự án thiết kế và thi công công trình dân dụng. 
                        NEXCON chú trọng từng chi tiết, với sự kết hợp giữa nghệ thuật thiết kế và công nghệ xây dựng tạo nên sự khác biệt. 
                        Tôn chỉ "Chọn đẳng cấp, chọn Nexcon" khẳng định cam kết xây dựng không chỉ ngôi nhà mà còn tổ ấm, 
                        nơi phản ánh phong cách và đẳng cấp của chủ nhân.
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
                    Giới thiệu chi tiết
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

export default Experience;
