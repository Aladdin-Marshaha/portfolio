import React from 'react';

function About() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1><a>About Me</a></h1>
          <p>Get to know me better</p>
        </header>
        
        <div className="content">
          <div className="about-text">
            <p>
              I'm a .NET Fullstack developer with a unique blend of creativity, technical skill, 
              and leadership experience. Between 2023–2025, I studied Fullstack .NET development 
              at EC Utbildning, where I learned to build complete, scalable web applications 
              using modern tools and frameworks.
            </p>
            
            <p>
              Before becoming a developer, I worked as a fashion designer—an experience that 
              sharpened my eye for detail, structure, and visual design. These strengths now 
              help me create clean, user-friendly interfaces. I later worked as a team leader 
              at McDonald's, where I learned to lead teams, stay calm under pressure, and 
              deliver results.
            </p>
            
            <p>
              My passion for technology has been with me since childhood, and today I use it 
              to build modern, responsive, and meaningful web applications. I enjoy exploring 
              new technologies, solving problems creatively, and continuously improving my skills.
            </p>
            
            <p>
              I bring a combination of design sense, leadership, and technical knowledge that 
              makes me a valuable contributor to any development team. My goal is to create 
              intuitive digital experiences that feel great to use.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default About;