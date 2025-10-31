import React from 'react';

function Contact() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1>Contact Me</h1>
          <p>Let's discuss your next project</p>
        </header>
        <div className="content">
          <p>
            I'm always interested in new opportunities and exciting projects.
            Don't hesitate to reach out!
          </p>
          
          <div className="row">
            <div className="col-6 col-12-small">
              <h3>Direct Contact</h3>
              <p><strong>Email:</strong> aladid90.se@gmail.com</p>
              <p><strong>Phone:</strong> +46 737 402 420</p>
            </div>
            <div className="col-6 col-12-small">
              <h3>Social Media</h3>
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
    </div>
  );
}

export default Contact;