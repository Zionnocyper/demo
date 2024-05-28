import React from 'react';
import data from '../../data/home5_residence/flawless';
function Flawless() {
  return (
    <section className="tc-flawless-style5">
      <div className="container">
        <div className="title mb-120">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="fsz-70 text-uppercase fw-400 js-splittext-lines">
                <span className="color-brown1"> Project's </span> <br />
                
              </h2>
            </div>
            <div className="col-lg-5">
              <h6 className="color-brown1 text-uppercase fsz-24 lh-4 js-splittext-lines">
                Với Nexsa mỗi dự án đều là một tác phẫm nghệ thuật với một cá tính riêng.
              </h6>
            </div>
          </div>
        </div>
        <div className="flawless wow zoomIn slow" data-wow-delay="0.2s">
          <div className="flex-accordion">
            <ul className="acc-list">
              {data.map((item, i) => (
                <li key={i} className={`acc-li  ${i == 0 && 'is-open'}`}>
                  <img src={item.img} alt="" className="bg" />
                  <div className="panel-inner">
                    <div className="acc-title">
                      <div className="numb"> {i + 1} </div>
                      <div className="txt"> {item.title} </div>
                    </div>
                    <div className="acc-body">
                      <h3 className="text-title">
                        {item.subTitle.split('<br />')[0]} <br />{' '}
                        {item.subTitle.split('<br />')[1]}
                      </h3>
                      <a href="#" className="float-arrow">
                        <i className="fat fa-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="numbers">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="number-card wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <h2 className=""> 120 </h2>
                <p>
                  Công trình <br /> được thiết kế.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="number-card wow fadeInUp slow"
                data-wow-delay="0.4s"
              >
                <h2 className=""> 45 </h2>
                <p>
                  Công trình <br /> được thi công.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="number-card wow fadeInUp slow"
                data-wow-delay="0.6s"
              >
                <h2 className=""> 5 năm </h2>
                <p>
                 Kinh nghiệm thiết kế <br /> Biệt thự cao cấp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flawless;
