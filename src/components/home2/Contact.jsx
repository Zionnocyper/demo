import React from 'react';

function Contact() {
  return (
    <section className="tc-contact-style2">
      <div className="container">
        <div className="contact-form">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="fsz-45 fw-500 text-center mb-80">
                Let’s work
                <span className="sub-font fst-italic color-orange1 fw-400">
                  together!
                </span>
              </h2>
              <p className="color-orange1 text-center mb-30">
                <i className="icon-6 bg-orange1 me-2 rounded-circle"></i> Vui lòng
                điền đủ thông tin.
              </p>
              <form className="form d-block">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">
                        Họ & Tên <span className="color-orange1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">
                      Địa chỉ email<span className="color-orange1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">
                        Số điện thoại <span className="color-ccc">(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">
                        Chọn Dịch Vụ <span className="color-orange1">*</span>
                      </label>
                      <select
                        name=""
                        id=""
                        className="form-select form-control"
                      >
                        <option value=""> Quy hoạch Đô thị </option>
                        <option value=""> Quy hoạch Nghỉ dưỡng </option>
                        <option value=""> Thiết kế & Thi công Biệt thự </option>
                        <option value=""> Thiết kế & Thi công Nội thất </option>
                        <option value=""> Thiết kế & Thi công Ngoại thất </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">
                        your budget{' '}
                        <span className="color-ccc">(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="A range budget for your project, ex: $10K - $50K"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor=""> Ghi chú </label>
                      <textarea
                        rows="8"
                        className="form-control"
                        placeholder="Write your message here"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="upload_img_content">
                      <div className="file">
                        <div className="file__input" id="file__input">
                          <input
                            className="file__input--file"
                            id="customFile"
                            type="file"
                            multiple="multiple"
                            name="files[]"
                          />
                          <label
                            className="file__input--label"
                            htmlFor="customFile"
                            data-text-btn="Add an attachment"
                          >
                            <i className="fal fa-paperclip"></i> Tệp
                            đính kèm
                          </label>
                        </div>
                        <div
                          className="file__value_content"
                          id="file__value_content"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check terms-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Tôi đồng ý với-
                        <a
                          href="#"
                          className="text-decoration-underline text-capitalize"
                          target="_blank"
                        >
                          Điều khoản & Điều kiện của công ty
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="#"
                    className="butn borderd border rounded-pill hover-bg-black bg-white mt-50"
                  >
                    <span>
                      Gửi yêu cầu
                      <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
