import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-liquid" id="heroLiquid">
        <div className="hero-liquid-media" id="heroLiquidMedia">
          <div className="hero-liquid-asset">
            <img src="/without-glasses.png" alt="" id="heroBaseImage" />
            <canvas aria-hidden="true"></canvas>
          </div>
        </div>
      </div>
      <div className="hero-vignette"></div>
      <div className="hero-watermark" id="heroWatermark">RIAD KASSAB</div>
      <div className="shell hero-content">
        <div className="hero-left">
          <h1 id="heroHeading">
            <span className="line"><span>Premium websites</span></span>
            <span className="line"><span>for businesses that</span></span>
            <span className="line"><span>want to look serious.</span></span>
          </h1>
          <div className="hero-rating" id="heroRating">
            <div className="hero-rating-stars">
              <svg className="icon icon-filled" viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
              <svg className="icon icon-filled" viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
              <svg className="icon icon-filled" viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
              <svg className="icon icon-filled" viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
              <svg className="icon icon-filled" viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
            </div>
            <span className="hero-rating-text">I help founders and brands launch clean, modern websites that build trust fast and present the business the right way.</span>
          </div>
          <div className="hero-cta" id="heroCta">
            <div className="hero-cta-row">
              <button className="pill-btn pill-btn-dark pill-btn-with-arrow pill-btn-arrow-up-right" onClick={() => {}}>
                View Selected Work
                <span className="pill-btn-badge">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M7 17 17 7M8 7h9v9"/>
                  </svg>
                </span>
              </button>
              <a className="pill-btn pill-btn-ceo pill-btn-with-arrow pill-btn-arrow-up-right" href="https://obrix-ashy.vercel.app/" target="_blank" rel="noreferrer">
                Visit Obrix Agency
                <span className="pill-btn-badge">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M7 17 17 7M8 7h9v9"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card" id="heroCard">
            <div className="hero-card-inner" onClick={() => {}}>
              <div className="hero-card-tile is-active" id="heroCardTile" data-card="0" aria-hidden="true">
                <span className="hero-card-thumb">
                  <span className="hero-card-thumb-top"></span>
                  <span className="hero-card-thumb-main"></span>
                  <span className="hero-card-thumb-side"></span>
                  <span className="hero-card-thumb-badge"></span>
                </span>
              </div>
              <div className="hero-card-panel">
                <div className="hero-card-caption" id="cardCaption">Angular • POS • Dashboard</div>
                <div className="hero-card-title" id="cardTitle">Coffee Shop Cashier System</div>
                <div className="hero-card-nav">
                  <div className="hero-card-dots">
                    <span className="hero-card-dot active"></span>
                    <span className="hero-card-dot"></span>
                    <span className="hero-card-dot"></span>
                  </div>
                  <button className="hero-card-btn" onClick={(e) => { e.stopPropagation(); }}>
                    <svg className="icon" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </button>
                  <button className="hero-card-btn" onClick={(e) => { e.stopPropagation(); }}>
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-partners" id="heroPartners">
            <div className="kpi-grid">
              <div className="kpi-block">
                <span className="kpi-num">17+</span>
                <span className="kpi-label">Projects Delivered</span>
              </div>
              <div className="kpi-block">
                <span className="kpi-num">7+</span>
                <span className="kpi-label">Industries Served</span>
              </div>
              <div className="kpi-block">
                <span className="kpi-num">1</span>
                <span className="kpi-label">Startup Co-Founder</span>
              </div>
              <div className="kpi-block">
                <span className="kpi-num">100%</span>
                <span className="kpi-label">Front-End Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shell hero-status" id="heroStatus">
        <span>Based in Egypt</span>
        <span className="hero-status-center">CEO of Obrix</span>
        <span>Scroll to see real work ↓</span>
      </div>
    </section>
  );
};

export default Hero;
