import React from 'react';

function Team() {
  return (
    
    <section className="tc-team-style1">
      <div className="container">
        <div className="numbers">
          <div className="row gx-5">
            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="perc"> 95% </h3>
                <p>
                  {' '}
                  Khách hàng cảm thấy <br /> Hài lòng{' '}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.4s">
                <h3 className="perc"> 326 </h3>
                <p>
                  {' '}
                  Dự án hoàn thành <br /> Sau 3 năm{' '}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.6s">
                <h3 className="perc"> 30 </h3>
                <p>
                  {' '}
                  Kiến trúc sư & Thợ thủ công <br /> Có trình độ cao{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
