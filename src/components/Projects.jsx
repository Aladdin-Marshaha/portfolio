import React from 'react';

function Projects() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1>Mina projekt</h1>
          <p>Utforska några av mina senaste arbeten</p>
        </header>
        <div className="content">
          <article>
            <header>
              <h3>Portfolio webbplats</h3>
              <p>React + Vite portfolio</p>
            </header>
            <p>
              Denna portfolio webbplats byggd med React, Vite och modern CSS
              för att visa upp mina färdigheter och projekt.
            </p>
          </article>
        </div>
      </article>
    </div>
  );
}

export default Projects;