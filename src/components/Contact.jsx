import React from 'react';

function Contact() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1>Kontakta mig</h1>
          <p>Låt oss diskutera ditt nästa projekt</p>
        </header>
        <div className="content">
          <p>
            Jag är alltid intresserad av nya möjligheter och spännande projekt.
            Tveka inte att höra av dig!
          </p>
          
          <div className="row">
            <div className="col-6 col-12-small">
              <h3>Direktkontakt</h3>
              <p><strong>Email:</strong> aladid90.se@gmail.com</p>
              <p><strong>Telefon:</strong> +46 737 402 420</p>
            </div>
            <div className="col-6 col-12-small">
              <h3>Sociala medier</h3>
              <ul className="icons">
                <li>
                  <a href="#" className="icon brands fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Contact;