import React from 'react';

function Testimonials() {
  return (
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6 className="fsz-18 text-uppercase lh-4">
              Khách hàng nói gì <br /> về chúng tôi
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-quote-right"></i>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tc-clients-style1">
              <div className="clients-slider1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                      “Toàn bộ nhóm đã khéo léo thực hiện một dự án
                      chất lượng được đảm bảo trong khi vẫn đúng tiến độ và dưới
                      ngân sách. Nhiều hơn những gì tôi mong đợi. Tôi cảm thấy ưng
                       ý và chắc chắn sẽ hợp tác tiếp tục trong tương lai.”
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Bùi Thanh Hằng
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Top 5 miss Universe Viet Nam 2017
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                      "Nexcon đã thực hiện dự án một cách tối ưu, đạt chất lượng tốt, 
                      đúng tiến độ và tiết kiệm ngân sách. Kết quả vượt xa mong đợi của tôi. 
                      Tôi cảm thấy hài lòng với chất lượng của dự án."
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team2.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Bùi Tuấn Ngọc
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Ban ngoại giao tổng cục chính trị bộ quốc phòng
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                      "Tôi thấy đúng như kỳ vọng với dịch vụ của Nexsa trong dự án này. 
                      Chất lượng của Nexcon mang lại kết quả ấn tượng với tôi."
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team3.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Vũ Thành Công
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Co-Fouder Công ty cổ phần công nghệ viễn thông AWing 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marq-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#"> NEXCON </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> NEXSA </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> NEXCON </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> NEXSA </a>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line3.png" alt="" className="c-line" />
    </section>
  );
}

export default Testimonials;
