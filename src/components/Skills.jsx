import React from 'react';

function Skills() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1><a>Skills</a></h1>
          <p>Technologies and tools I've worked with</p>
        </header>
        <div className="content">
          <h3 className='skillsTitle'>Frontend Development</h3>
          <section>
            <div className='mySkills'>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-solid fa-code fa-2xl"></i></div>
                <h3>Blazor</h3>
              </div>              
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-brands fa-html5 fa-2xl"></i></div>
                <h3>HTML</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-brands fa-css3-alt fa-2xl"></i></div>
                <h3>CSS</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-brands fa-js-square fa-2xl"></i></div>
                <h3>Javascript</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-brands fa-react fa-2xl"></i></div>
                <h3>React</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="devicon-typescript-plain fa-2xl"></i></div>
                <h3>TypeScript</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-solid fa-wind fa-2xl"></i></div>
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </section>

          <h3 className='skillsTitle'>Backend Development</h3>

          <section>
            <div className='mySkills'>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="devicon-csharp-plain fa-2xl"></i></div>
                <h3>C#</h3>
              </div>              
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="devicon-dotnetcore-plain fa-2xl"></i></div>
                <h3>ASP.NET Core</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="devicon-graphql-plain fa-2xl"></i></div>
                <h3>GraphQL</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="devicon-nodejs-plain fa-2xl"></i></div>
                <h3>Node.js</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-solid fa-server fa-2xl"></i></div>
                <h3>SQL Server</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-solid fa-database fa-2xl"></i></div>
                <h3>Entity Framework</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="devicon-firebase-plain fa-2xl"></i></div>
                <h3>Firebase</h3>
              </div>
            </div>  
          </section>

          <h3 className='skillsTitle'>Other Technologies</h3>

          <section>
            <div className='mySkills'>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-brands fa-github fa-2xl"></i></div>
                <h3>GitHub</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-brands fa-umbraco fa-2xl"></i></div>
                <h3>Umbraco</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="fa-brands fa-figma fa-2xl"></i></div>
                <h3>Figma</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i className="devicon-azure-plain fa-2xl"></i></div>
                <h3>Azure</h3>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export default Skills;