// Page3.jsx
import React from 'react';
import '../styles/Page3.css';
import bottleImg from '../assets/kinley bottle.png'; // <-- your file

export default function Page3() {
  return (
    <div className="page3-container">
      <div className="navbar-spacer" />

      {/* Background bottle */}
      <img
        src={bottleImg}
        alt=""
        className="bottle-bg"
        draggable={false}
      />

      {/* Left-top text block */}
      <div className="left-text-block">
        <h1 className="left-title">
          Bridging the design gap,
          <br />
          so there are <span className="blue-caps">no missing caps.</span>
        </h1>
        <p className="left-subtitle">
          The absence of tethered caps in India is not just a design gap, it's
          a missed opportunity to reduce plastic waste at scale.
        </p>
      </div>

      {/* Right-bottom text block */}
      <div className="right-text-block">
        <p>
          By piecing together discarded plastic caps into a tidal wave,
          Cap-tured Earth highlights the growing crisis of single-use plastics
          and the urgent need for planet-conscious product designs like tethered
          caps.
        </p>
      </div>
    </div>
  );
}