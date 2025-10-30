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
    </div>
  );
}

export default Contact;