import React, { useRef } from "react" ;
import emailjs from "@emailjs/browser" ;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm
     (
        "service_zy7hrjo",
        "template_ah9c9b4",
        form.current,
        "c3E9_eyECb7OV9RPk"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="tc-contact-form-style1">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <h3 className="fsz-45 fw-500 mb-80">
                Hãy để chúng tôi giúp bạn xây dựng tổ ấm mơ ước!
              </h3>
              <p className="fsz-14 color-666 mt-15">
                Địa chỉ email của bạn sẽ được bảo mật <br /> Vui lòng điền đủ
                các thông tin này <span className="text-danger"> * </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action=""
              className="form mt-5 mt-lg-0 wow fadeInUp slow"
              data-wow-delay="0.4s"
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                    Họ & Tên <span className="color-orange1"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your name"
                      name ="user_name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                     Địa chỉ email <span className="color-orange1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email address"
                      name ="user_email"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      Số điện thoại <span className="color-999"> (optional) </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your phone number"
                      name ="user_phone"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      Dịch vụ <span className="color-orange1"> * </span>
                    </label>
                    <select name="user_subject" id="" className="form-select form-control">
                    <option value="Quy hoạch đô thị"> Quy hoạch đô thị </option>
                      <option value="Thiết kế & Quy hoạch nghỉ dưỡng"> Thiết kế & Quy hoạch nghỉ dưỡng </option>
                      <option value="Thiết kế & Thi công biệt thự"> Thiết kế & Thi công biệt thự </option>
                      <option value="Thiết kế & Thi Công ngoại thất"> Thiết kế & Thi Công ngoại thất </option>
                      <option value="Thiết kế & Thi Công nội thất"> Thiết kế & Thi Công nội thất </option>
                      <option value="Mua phần mềm quản lý "> Mua phần mềm quản lý </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-30">
                    <label htmlFor=""> Ghi chú </label>
                    <textarea
                      rows="6"
                      placeholder="Write your message here"
                      className="form-control"
                      name="message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <a
           
                className="butn hover-bg-orange1 text-capitalize bg-white rounded-pill mt-40"
              >
                <span>
                <input  type="submit" value="Send" />
                  <i className="fal fa-arrow-up-right ms-2"></i>
                </span>
              </a>
              <p className="fsz-12 color-666 mt-20">
                Tôi đồng ý với- 
                <a href="#" className="color-000 text-decoration-underline">
                Điều khoản & Điều kiện
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/contact_shap.png"
        alt=""
        className="shap"
      />
    </section>
  );
}

export default ContactForm;
