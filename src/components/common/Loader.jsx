import React from 'react';

function Loader() {
  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>N</span>
          <span>E</span>
          <span>X</span>
          <span>-</span>
          <span>H</span>
          <span>O</span>
          <span>L</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
