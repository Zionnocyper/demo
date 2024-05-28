import React from 'react';

function Map() {
  return (
    <section className="tc-map-style1">
      <div className="map-card wow zoomIn slow" data-wow-delay="0.2s">
        <iframe
          src="https://www.google.com/maps/place/M%C3%A2y+Xanh+L%C3%A1+-+C%E1%BB%ADa+h%C3%A0ng+c%C3%A2y+xanh/@21.0003915,105.844689,17z/data=!3m1!4b1!4m6!3m5!1s0x3135adc06c26227f:0x19b1e9a586e60c27!8m2!3d21.0003865!4d105.8472639!16s%2Fg%2F11v3hy58vc?entry=ttu"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
