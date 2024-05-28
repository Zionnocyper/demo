import React from 'react';
import demos from '../../data/main-page/demos';
import pages from '../../data/main-page/innerpages';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-preview">
      <div className="container-fluid content">
        <a className="navbar-brand" href="/">
          <img
            src="/home1/assets/img/logo.png"
            alt=""
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               DỰ ÁN NEXSA
              </a>
              <ul className="dropdown-menu">
                {demos.map((item, i) => (
                  <li key={i}>
                    <a className="dropdown-item" href={item.link}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               DỰ ÁN NEXCON
              </a>
              <ul className="dropdown-menu">
                {pages.map((item, i) => (
                  <li key={i}>
                    <a className="dropdown-item" href={item.link}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DỊCH VỤ
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/Home7Page"
                  >
                    Quy hoạch đô thị
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/Home7Page"
                  >
                    Thiết kế & Quy hoạch Nghỉ Dưỡng
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/Home5Page"
                  >
                    Thiết kế & Thi công Biệt thự
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="Home2Page"
                  >
                    Thiết kế & Thi công Nội thất
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="Home4Page"
                  >
                    Thiết kế & Xây dựng Ngoại thất
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AboutPage">
                GIẢI PHÁP PHẦN MỀM
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                VỀ CHÚNG TÔI
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/Home3Page">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/AboutPage">
                    Giải pháp Công nghệ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/BlogPage">
                    Tin tức
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="nav-side">
            <a
              href="/ContactPage"
              className="butn hover-bg-black text-capitalize bg-orange1 rounded-pill text-white"
            >
              <span> ĐĂNG KÝ TƯ VẤN </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
