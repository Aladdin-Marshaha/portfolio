import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.target;
    
    // EmailJS configuration
    const serviceID = 'service_fo1f2gg';
    const templateID = 'template_rxg5669';
    const publicKey = '0oh1oK9pPnXxAjqGf';

    emailjs.sendForm(serviceID, templateID, form, publicKey)
      .then(() => {
        setIsLoading(false);
        alert('Tack för ditt meddelande! Jag återkommer så snart som möjligt.');
        form.reset();
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('EmailJS Error:', error);
        alert('Ett fel uppstod. Försök igen eller kontakta mig direkt på aladdin90.se@gmail.com');
      });
  };
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1><a>Contact Me</a></h1>
          <p>
            I'm always interested in new opportunities and exciting projects.
            Don't hesitate to reach out!
          </p>
        </header>
      </article>
        <footer id="footer">
          <section>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field">
                  <label htmlFor="from_name">Name</label>
                  <input type="text" name="from_name" id="from_name" required />
                </div>
                <div className="field">
                  <label htmlFor="from_email">Email</label>
                  <input type="email" name="from_email" id="from_email" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="3" required></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input 
                    type="submit" 
                    value={isLoading ? "Skickar..." : "Send Message"}
                    disabled={isLoading}
                  />
                </li>
              </ul>
            </form>
          </section>

          <section className="split contact">
            <section className="alt">
              <h3>Address</h3>
              <p>Helsingborg , Sverige</p>
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
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Aladdin-Marshaha" className="icon brands alt fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aladdin-marshaha-3aaa53225/" className="icon brands alt fa-linkedin">
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