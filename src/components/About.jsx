import React from 'react';

function About() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1>Om mig</h1>
          <p>Mjukvaruingenjör specialiserad inom .NET utveckling</p>
        </header>
        <div className="content">
          <p>
            Jag är en passionerad mjukvaruingenjör med specialisering inom .NET Fullstack utveckling. 
            Med en gedigen utbildningsbakgrund från yrkeshögskola och praktisk erfarenhet inom både 
            frontend och backend utveckling strävar jag efter att leverera högkvalitativa lösningar 
            som gör skillnad.
          </p>
          <h3>Min bakgrund:</h3>
          <p>
            Utbildad inom .NET utveckling på yrkeshögskola (2 år) där jag byggde en solid grund 
            inom mjukvaruutveckling. Genom praktiska projekt och teoretisk kunskap har jag 
            utvecklat expertis inom allt från små webbapplikationer till komplexa enterprise-system.
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