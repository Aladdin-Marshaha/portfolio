import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../images/profile bild.jpeg';

function Home() {
  return (
    <>
      <div id="main">
        <article className="post featured">
          <header className="major">
            <p >
              Hello! I am a passionate .NET Fullstack Developer with expertise in 
              modern web solutions and user-centered design. Here you can explore 
              my projects, skills, and get in touch for future collaborations.
            </p>
          </header>

          
          <div className="content">
            <h3>What I Offer</h3>
            <p>
              With experience in web development, I create robust and 
              scalable solutions. From frontend with React and modern CSS frameworks 
              to backend with .NET Core and databases - I master the entire stack.
            </p>
            
            <div className="actions">
              <Link to="/skills" className="button primary large">
                <i className="fa-solid fa-code"></i>
                Utforska mina Skills
              </Link>
              <Link to="/contact" className="button large">
                <i className="fa-solid fa-envelope"></i>
                Kontakta mig
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;