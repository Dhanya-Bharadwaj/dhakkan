import React from 'react';
import '../styles/Page3.css';
import bottleImage from '../assets/kinley bottle.png'; 

const Page3 = () => {
  return (
    <div className="page3-container">
      {/* Navbar Placeholder */}
      <nav className="navbar-space">
        {/* Navbar code will go here later */}
      </nav>

      <main className="content-area">
        
        {/* Left Section: Title + Top Paragraph */}
        <section className="text-section left-align">
          <h1 className="main-heading">
            Bridging the design gap,<br />
            so there are <span className="blue-text">no missing caps.</span>
          </h1>
          <p className="description-text">
            The absence of tethered caps in India is not just a design gap, it’s a missed opportunity to reduce plastic waste at scale.
          </p>
        </section>

        {/* Center Section: Bottle Image */}
        <div className="image-section">
          <img src={bottleImage} alt="Kenley Bottle" className="bottle-image" />
        </div>

        {/* Right Section: Bottom Paragraph */}
        <section className="text-section right-align">
          <p className="description-text">
            By piecing together discarded plastic caps into a tidal wave, Cap-tured Earth highlights the growing crisis of single-use plastics and the urgent need for planet-conscious product designs like tethered caps.
          </p>
        </section>

      </main>
    </div>
  );
};

export default Page3;