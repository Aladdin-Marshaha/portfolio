import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../images/profile bild.jpeg';

function Home() {
  return (
    <>
      <div id="main">
        <article className="post featured">
          <header className="major">
            <span className="date">Välkommen</span>
            <h1><a>Välkommen till min Portfolio</a></h1>
            <p>
              Hej! Jag är en passionerad .NET Fullstack Developer med expertis inom 
              moderna webblösningar och användarcentrerad design. Här kan du utforska 
              mina projekt, färdigheter och ta kontakt för framtida samarbeten.
            </p>
          </header>
          
          <div className="content">
            <h2>Vad jag erbjuder</h2>
            <p>
              Med flera års erfarenhet inom webbutveckling skapar jag robusta och 
              skalbara lösningar. Från frontend med React och moderna CSS-frameworks 
              till backend med .NET Core och databaser - jag behärskar hela stacken.
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
            
            <h3>Vad gör mig unik?</h3>
            <ul>
              <li><strong>Fullstack-expertis:</strong> Behärskar både frontend och backend utveckling</li>
              <li><strong>Modern teknikstack:</strong> React, .NET Core, Azure och mycket mer</li>
              <li><strong>Användarfokus:</strong> Skapar lösningar som är både funktionella och vackra</li>
              <li><strong>Kontinuerlig utveckling:</strong> Alltid uppdaterad med senaste trenderna</li>
            </ul>
            
            <p>
              Redo att ta nästa steg? Utforska mina färdigheter eller ta kontakt 
              direkt - jag ser fram emot att höra från dig!
            </p>
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;