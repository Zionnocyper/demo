import React from 'react';

function Slider2() {
  return (
    <section className="tc-main-img-style1 header">
      <div className="main-img">
        <img
          src="/innerpages/assets/img/blog/b1.jpg"
          alt=""
          className="img-cover"
          data-speed="1.25"
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="info">
            <div className="date fsz-12 text-uppercase mb-30">
              <a href="#"> inspiration </a>
              <span className="circle icon-3 bg-white rounded-circle mx-3"></span>
              <a href="#"> 10/02/2021 </a>
            </div>
            <h2 className="title">
              <a href="#" className="hover-orange1">
              NEX: 
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider2;
