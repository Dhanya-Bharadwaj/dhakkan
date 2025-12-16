import './App.css'
import caps7 from './assets/caps7.png'
import caps4 from './assets/caps 4.png'

function App() {
  return (
    <div className="app-wrapper">
      {/* PAGE 1: Navbar + Hero Text (First Half) */}
      <div className="page page-1">
        <div className="caps4-bg" style={{ backgroundImage: `url(${caps4})` }} aria-hidden="true" />
        <div className="nav-spacer" aria-hidden="true" />
        
        <main className="content content-1">
          <section className="hero-block">
          <h1 className="hero-title">
            EVERY CAP YOU DROP JOINS
            <br />
            THE <span className="accent">3.5 MILLION TONNES OF</span>
            <br />
            <span className="accent">PLASTIC WASTE</span> THAT LEAKS
            <br />
            INTO INDIA'S ENVIRONMENT
            <br />
            EACH YEAR.
          </h1>
          <a className="link" href="#">(TERI REPORT)</a>

          <div className="subhead">
            <p>We are not just polluting the planet.</p>
            <p>We are becoming the pollution.</p>
          </div>
        </section>
        </main>
      </div>

      {/* PAGE 2: Rest of Content (Second Half) */}
      <div className="page page-2">
        <div className="caps7-bg" style={{ backgroundImage: `url(${caps7})` }} aria-hidden="true" />
        <main className="content content-2">
          <section className="midline-block">
            <div className="bottle-spacer" aria-hidden="true" />
            <div className="midline" aria-hidden="true" />
            <div className="mid-copy">
            <p>
              Now is the time to take decisive action to protect the planet. Highlighting the impact of small plastic pieces that slip out of the recycling system is one thing. The need of the hour is to advance through strategic litigation and drive systemic change so nature-conscious designs like tethered caps are not optional.
            </p>
          </div>
        </section>

        <section className="petition-row">
          <div className="petition-spacer" aria-hidden="true" />
          <div className="petition-content">
            <div className="petition-text">
              <p className="petition-title">A PETITION TO</p>
              <p className="petition-strong">MANDATE TETHERED CAPS</p>
              <p className="petition-meta">ON ALL SINGLE-USE PLASTIC</p>
              <p className="petition-meta">BOTTLES IN INDIA.</p>
            </div>
          </div>
        </section>

        <section className="quote-row">
          <div className="quote-card">
            <div className="quote-mark">“</div>
            <p>
              I pledge to support tethered caps as a simple design solution to prevent plastic pollution.
            </p>
            <div className="quote-mark end">”</div>
          </div>

          <div className="cta-block">
            <div className="cta-text">
              <p className="cta-line">Demand better</p>
              <p className="cta-line">plastic design in India.</p>
            </div>
            <a className="cta-button" href="#">SIGN THE PETITION</a>
          </div>
        </section>
        </main>
      </div>
    </div>
  )
}

export default App
