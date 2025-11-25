import React from 'react';

function Contact() {
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Convert FormData to object
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data
      })
    })
    .then(() => {
      alert('Tack för ditt meddelande! Jag återkommer så snart som möjligt.');
      form.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
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
            <form method="POST" data-netlify="true" name="contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <div className="fields">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="3" required></textarea>
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