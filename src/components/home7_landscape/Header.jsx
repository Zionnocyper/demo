import React from 'react';

function Header() {
  return (
    <header className="tc-header-style7">
      <div className="container">
        <h1> Quy hoạch đô thị </h1>
        <div className="head-features">
          <p> Tư vấn lập dự án </p>
          <p> Thiết kế quy hoạch </p>
          <p> Diễn họa 3D quy hoạch </p>
        </div>
      </div>
      <div className="img">
        <img
          src="/home7_landscape/assets/img/header.jpg"
          alt=""
          className="img-cover"
          data-speed="1.25"
        />
      </div>
    </header>
  );
}

export default Header;
