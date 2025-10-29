import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './assets/css/main.css';
import './assets/css/noscript.css';
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
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav id="nav">
      <ul className="links">
        <li className={isActive('/')}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive('/about')}>
          <Link to="/about">About</Link>
        </li>
        <li className={isActive('/skills')}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={isActive('/projects')}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={isActive('/contact')}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
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
          <h2>.NET Fullstack Developer</h2>
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

        {/* Footer */}
        <footer id="footer">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="3" />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
          </section>

          <section className="split contact">
            <section className="alt">
              <h3>Address</h3>
              <p>Stockholm, Sverige</p>
            </section>
            <section>
              <h3>Phone</h3>
              <p>
                <a href="tel:+46737402420">+46 737 402 420</a>
              </p>
            </section>
            <section>
              <h3>Email</h3>
              <p>
                <a href="mailto:aladid90.se@gmail.com">aladid90.se@gmail.com</a>
              </p>
            </section>
            <section>
              <h3>Social</h3>
              <ul className="icons alt">
                <li>
                  <a href="#" className="icon brands alt fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </footer>

        {/* Copyright */}
        <div id="copyright">
          <ul>
            <li>© 2024 Aladdin Marshaha</li>
            <li>
              Design: <a href="https://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
