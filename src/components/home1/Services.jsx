import React from 'react';

function Services() {
  return (
    <section className="tc-services-style1">
      <div className="content section-padding section-padding-x">
        <div className="container">
          <div className="title mb-80 text-center">
            <p className="color-666 text-uppercase wow"> DỊCH VỤ CỦA CHÚNG TÔI </p>
          </div>
          <div className="services">
            <div className="row">
              <div className="col-lg-3">
                <a
                  href="/Home7Page"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="la la-hard-hat"></i>
                  </div>
                  <h5 className="fsz-24 mb-20"> Thiết Kế Quy Hoạch </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser1.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                  Thiết kế tổng mặt bằng,            
                  Thiết kế đô thị,
                  Thiết kế quy hoạch chi tiết,
                  Thiết kế quy hoạch phân khu,
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="/Home7Page"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <i className="la la-bezier-curve"></i>
                  </div>
                  <h5 className="fsz-24 mb-20"> Thiết Kế Nghỉ Dưỡng </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser2.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                  Tư vấn lập dự án đầu tư,
                  Tư vấn thiết kế nhà ở nghỉ dưỡng cá nhân,
                  Tư vấn thiết kế tổ hợp công trình nghỉ dưỡng Khách sạn, Retreat, Resort.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="/Home5Page"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="la la-bed"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">Thiết Kế & Thi Công Xây Dựng </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser3.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Tư vấn, thiết kế công trình, triển khai hồ sơ kỹ thuật, 
                    tổng thầu thi công, cải tạo công trình, xin hồ sơ cấp phép.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="Home2Page"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon">
                    <i className="la la-comments"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">
                  Thiết Kế & Thi Công Nội Thất
                  </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser4.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Thiết kế nội thất, cung cấp thiết bị, 
                    cung cấp vật tư, thi công hoàn thiện nội thất,
                    sản xuất đồ nội thất.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/AboutPage"
              className="butn rounded-pill mt-80 hover-bg-black bg-orange1 text-white"
            >
              <span>
                Phần Mềm Quản Lý
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="ser-img">
        <img src="/home1/assets/img/services/ser.jpg" alt="" />
      </div>
    </section>
  );
}

export default Services;
