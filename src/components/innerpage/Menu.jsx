import React from 'react';

function Menu() {
  return (
    <>
      <div className="side_menu4_overlay"></div>
      <div className="side_menu4_overlay2"></div>
      <div className="side_menu_style4">
        <div className="content">
          <div className="main_links">
            <ul>
              <li>
                <a href="/" className="main_link">
                  Home
                </a>
              </li>
              <li>
                <a href="/PortfolioPage" className="main_link">
                  Nexsa
                </a>
              </li>
              <li>
                <a href="/PortfolioPage1" className="main_link">
                  Nexcon
                </a>
              </li>
              <li>
                <a href="#" className="main_link">
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#" className="main_link">
                  Báo Giá
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="/innerpages/assets/img/chat_pat2.png"
          alt=""
          className="side_shape"
        />
        <img
          src="/innerpages/assets/img/chat_pat2.png"
          alt=""
          className="side_shape2"
        />
        <span className="clss">
          <i className="la  la-times"></i>
        </span>
      </div>
    </>
  );
}

export default Menu;
