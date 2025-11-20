import React from 'react';

function Skills() {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
            <h1><a>Skills</a></h1>
          <h1>My Skills</h1>
          <p>Technologies and tools I master</p>
        </header>
        <div className="content">
          <h3 className='skillsTitle'>Frontend Development</h3>
          <section>
            <div className='mySkills'>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-blazor-original"></i></div>
                <h3>Blazor</h3>
              </div>              
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="fa-brands fa-html5 fa-2xl"></i></div>
                <h3>HTML</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="fa-brands fa-css3-alt fa-2xl"></i></div>
                <h3>CSS</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="fa-brands fa-html5 fa-2xl"></i></div>
                <h3>Javascript</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="fa-brands fa-react fa-2xl"></i></div>
                <h3>React</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-typescript-plain"></i></div>
                <h3>TypeScript</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-tailwindcss-original"></i></div>
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </section>

          <h3 className='skillsTitle'>Backend Development</h3>

          <section>
            <div className='mySkills'>
              <div className='skillsBox'><div className='skillsIcon'><i class="devicon-csharp-plain"></i></div>
                <h3>C#</h3>
              </div>              
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-dotnetcore-plain"></i></div>
                <h3>ASP.NET Core</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-graphql-plain"></i></div>
                <h3>GraphQL</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-nodejs-plain"></i></div>
                <h3>Node.js</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-azuresqldatabase-plain"></i></div>
                <h3>SQL Server</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="fa-solid fa-database"></i></div>
                <h3>Entity Framework</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-firebase-plain"></i></div>
                <h3>Firebase</h3>
              </div>
            </div>
          </section>

          <h3 className='skillsTitle'>Other Technologies</h3>

          <section>
            <div className='mySkills'>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="fa-brands fa-github fa-2xl"></i></div>
                <h3>GitHub</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="fa-brands fa-umbraco"></i></div>
                <h3>Umbraco</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="fa-brands fa-figma fa-2xl"></i></div>
                <h3>Figma</h3>
              </div>
              <div className='skillsBox'>
                <div className='skillsIcon'><i class="devicon-azure-plain"></i></div>
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