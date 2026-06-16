import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <div className="shell header-inner">
        <button className="header-brand" onClick={() => {}}>
          <span className="brand-dot" aria-hidden="true"></span>
          <span>Riad Kassab</span>
        </button>
        <nav className="header-nav">
          <button aria-current="page" onClick={() => {}}>Home</button>
          <button onClick={() => {}}>Work</button>
          <button onClick={() => {}}>
            Services
            <span className="header-nav-dropdown">▾</span>
          </button>
          <button onClick={() => {}}>About</button>
          <button onClick={() => {}}>Skills</button>
          <button onClick={() => {}}>Contact</button>
        </nav>
        <div className="header-right">
          <div className="header-clock">
            <span className="header-clock-label" id="headerClockLabel">Local time</span>
            <span className="header-clock-time" id="clockTime">9:41am</span>
            <span className="header-clock-sep">•</span>
            <span className="header-clock-date" id="clockDate">12 March, 2025</span>
          </div>
          <button className="theme-toggle-btn" id="themeToggle" type="button" aria-label="Toggle theme">
            <span id="themeToggleIcon" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 3v2.5M12 18.5V21M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M3 12h2.5M18.5 12H21M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
              </svg>
            </span>
          </button>
          <button className="lang-toggle-btn" id="langToggle" type="button" aria-label="Switch language">AR</button>
          <button className="header-menu-btn" onClick={() => {}}>
            <span>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span className="header-menu-text">Menu</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
