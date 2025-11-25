import React from 'react';

function About() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1><a>About Me</a></h1>
          <p>Software Engineer specialized in .NET development</p>
        </header>
        <div className="content">
          <p>
            I am a passionate Software Engineer specializing in .NET Fullstack development. 
            With a solid educational background from vocational college and practical experience 
            in both frontend and backend development, I strive to deliver high-quality solutions 
            that make a difference.
          </p>
          <h3>My Background:</h3>
          <p>
            Educated in .NET development at vocational college (2 years) where I built a solid 
            foundation in software development. Through practical projects and theoretical knowledge, 
            I have developed expertise in everything from small web applications to complex enterprise systems.
          </p>
          <h3>What I'm passionate about:</h3>
          <ul>
            <li>Clean and efficient code</li>
            <li>User-centered design</li>
            <li>Continuous learning</li>
            <li>Teamwork and knowledge sharing</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default About;