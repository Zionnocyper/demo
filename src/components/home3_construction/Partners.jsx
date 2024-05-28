import React from 'react';
import data from '../../data/home3_construction/partners';
function Partners() {
  return (
    <section className="tc-partners-style3">
      <div className="container">
        <div className="title mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h5
                className="fsz-30 text-uppercase wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                Đối tác của chúng tôi
              </h5>
            </div>
            <div className="col-lg-8 mt-4 mt-lg-0">
              <div
                className="text fsz-18 wow fadeInUp slow"
                data-wow-delay="0.4s"
              >
                Chúng tôi tự hào được các đối tác tin cậy và lựa chọn trong
                suốt 5 năm qua, dưới đây là những cái tên nổi bật.
              </div>
            </div>
          </div>
        </div>
        <div className="logos">
          {data.map((item, i) => (
            <a
              key={i}
              href="#"
              className="logo-card wow fadeInUp slow"
              data-wow-delay={item.delay}
            >
              <span className="num">{i + 1}</span>
              <img src={item.img} alt="" className="logo" />
              <p> {item.title} </p>
            </a>
          ))}
        </div>
      </div>
      <img
        src="/home3_construction/assets/img/bg_pattern.png"
        alt=""
        className="bg"
        data-speed="0.8"
      />
    </section>
  );
}

export default Partners;
