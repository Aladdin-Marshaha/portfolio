import React from 'react';

function About() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1>Om mig</h1>
          <p>Lär känna mig och min bakgrund inom utveckling</p>
        </header>
        <div className="content">
          <p>
            Jag är en .NET Fullstack Developer med passion för att skapa
            innovativa lösningar. Med omfattande erfarenhet inom både
            frontend och backend utveckling strävar jag efter att leverera
            högkvalitativa applikationer.
          </p>
          <h3>Min bakgrund:</h3>
          <p>
            Med flera års erfarenhet inom mjukvaruutveckling har jag arbetat
            med allt från små webbapplikationer till stora enterprise-system.
          </p>
          <h3>Vad jag brinner för:</h3>
          <ul>
            <li>Ren och effektiv kod</li>
            <li>Användarcentrerad design</li>
            <li>Kontinuerlig inlärning</li>
            <li>Teamarbete och kunskapsdelning</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default About;