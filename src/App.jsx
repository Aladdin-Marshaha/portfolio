import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './assets/sass/main.scss';
import './assets/sass/noscript.scss';
import profileImg from './images/profile bild.jpeg';

// Importera komponenter
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Navigation komponent
function Navigation() {
  const location = useLocation();
  const [isNavPanelVisible, setIsNavPanelVisible] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  const toggleNavPanel = () => {
    const newState = !isNavPanelVisible;
    setIsNavPanelVisible(newState);
    if (newState) {
      document.body.classList.add('is-navPanel-visible');
    } else {
      document.body.classList.remove('is-navPanel-visible');
    }
  };
  
  const closeNavPanel = () => {
    setIsNavPanelVisible(false);
    document.body.classList.remove('is-navPanel-visible');
  };

  return (
    <>
      <nav id="nav">
        <ul className="links">
          <li className={isActive('/')}>
            <Link to="/"><i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home</Link>
          </li>
          <li className={isActive('/about')}>
            <Link to="/about"><i className="fa-sharp fa-solid fa-user"></i>&nbsp;&nbsp;About</Link>
          </li>
          <li className={isActive('/skills')}>
            <Link to="/skills"><i className="fa-solid fa-code"></i>&nbsp;&nbsp;Skills</Link>
          </li>
          <li className={isActive('/projects')}>
            <Link to="/projects"><i className="fa-solid fa-diagram-project"></i>&nbsp;&nbsp;Projects</Link>
          </li>
          <li className={isActive('/contact')}>
            <Link to="/contact"><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;Contact</Link>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Aladdin-Marshaha" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aladdin-marshaha-3aaa53225/" className="icon brands fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Hamburger Menu Toggle */}
      <a href="#navPanel" id="navPanelToggle" onClick={(e) => { e.preventDefault(); toggleNavPanel(); }}>
        Menu
      </a>
      
      {/* Mobile Navigation Panel */}
      {isNavPanelVisible && (
        <div id="navPanel" className={isNavPanelVisible ? 'visible' : ''}>
          <nav>
            <ul className="links">
              <li className={isActive('/')}>
                <Link to="/" onClick={closeNavPanel}><i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home</Link>
              </li>
              <li className={isActive('/about')}>
                <Link to="/about" onClick={closeNavPanel}><i className="fa-sharp fa-solid fa-user"></i>&nbsp;&nbsp;About</Link>
              </li>
              <li className={isActive('/skills')}>
                <Link to="/skills" onClick={closeNavPanel}><i className="fa-solid fa-code"></i>&nbsp;&nbsp;Skills</Link>
              </li>
              <li className={isActive('/projects')}>
                <Link to="/projects" onClick={closeNavPanel}><i className="fa-solid fa-diagram-project"></i>&nbsp;&nbsp;Projects</Link>
              </li>
              <li className={isActive('/contact')}>
                <Link to="/contact" onClick={closeNavPanel}><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;Contact</Link>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Aladdin-Marshaha" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aladdin-marshaha-3aaa53225/" className="icon brands fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </nav>
          <a href="#navPanel" className="close" onClick={(e) => { e.preventDefault(); closeNavPanel(); }}></a>
        </div>
      )}
    </>
  );
}

function App() {
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          return resolve();
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = () => resolve();
        s.onerror = (e) => reject(e);
        document.body.appendChild(s);
      });

    (async () => {
      try {
        const basePath = import.meta.env.BASE_URL;
        await loadScript(`${basePath}assets/js/jquery.min.js`);
        await loadScript(`${basePath}assets/js/jquery.scrollex.min.js`);
        await loadScript(`${basePath}assets/js/jquery.scrolly.min.js`);
        await loadScript(`${basePath}assets/js/browser.min.js`);
        await loadScript(`${basePath}assets/js/breakpoints.min.js`);
        await loadScript(`${basePath}assets/js/util.js`);
        await loadScript(`${basePath}assets/js/main.js`);
      } catch (e) {
        console.error('Kunde inte ladda skript:', e);
      }
    })();
  }, []);

  return (
    <Router>
      <div id="wrapper" className="fade-in is-preload">
        {/* Intro */}
        <div id="intro">
          <img
            src={profileImg}
            alt=""
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto 20px auto',
            }}
          />
          <h1>Aladdin Marshaha</h1>
          <h2>Software Engineer | .NET Specialist</h2>
          <ul className="actions">
            <li>
              <a href="#header" className="button icon solid solo fa-arrow-down scrolly">
                Continue
              </a>
            </li>
          </ul>
        </div>

        {/* Header */}
        <header id="header">
          <Link to="/" className="logo">
            Aladdin Marshaha
          </Link>
        </header>

        {/* Navigation */}
        <Navigation />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      

        <div id="copyright">
          <ul>
            <li>2025 © Designed and built by Aladdin Marshaha.</li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
