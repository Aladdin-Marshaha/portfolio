import React, { useState } from 'react';

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "Cilicon",
      description: "School project, full-stack development using ASP .NET Core MVC..",
      tools: ["C#", "ASP.NET Core", "MVC", "Entity Framework", "SQL Server", "SCSS", "JavaScript", "HTML5", "Rest API"],
      status: "github",
      // School project, complete code available on GitHub
      githubUrl: "https://github.com/Aladdin-Marshaha/CiliconMVC",
      hidden: false
        },
        {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern design and smooth animations. Showcases my projects and skills in a professional way.",
      tools: ["React", "SCSS", "Vite", "EmailJS", "JavaScript", "HTML5"],
      status: "live",
      githubUrl: "https://github.com/Aladdin-Marshaha/portfolio",
      liveUrl: "https://aladdin-marshaha.github.io/portfolio/",
      hidden: true
        },
        {
      id: 3,
      title: "Console Application / Address Book",
      description: "School project. AdressBok is a console-based address book in C# with CRUD functions for contacts. Uses interface-driven architecture, dependency injection and JSON persistence with Newtonsoft.Json.",
      tools: ["C#", ".NET 8", "Entity Framework Core", "SQL Server LocalDB", "Microsoft.Extensions.Hosting"],
      status: "github",
      githubUrl: "https://github.com/Aladdin-Marshaha/Console-App-AdressBok-",
      hidden: false
        },
        {
      id: 4,
      title: "Product Management Console Application",
      description: "School project. A CRUD console application for product management. Uses Entity Framework Core with LocalDB persistence, follows Repository/Service pattern and implements dependency injection with a text-based menu interface.",
      tools: ["C#", ".NET 8", "Entity Framework Core", "SQL Server LocalDB", "Microsoft.Extensions.Hosting"],
      status: "github",
      githubUrl: "https://github.com/Aladdin-Marshaha/ConsoleAppProducts",
      hidden: false
        },
        {
      id: 5,
      title: "Crito - Website",
      description: "School project. A modern website built with React featuring a component-based architecture. Includes comprehensive landing page, services presentation, news section with articles, contact forms, and responsive design for multiple devices.",
      tools: ["React", "React Router DOM", "Bootstrap", "Formik", "Yup", "SCSS", "Font Awesome", "Jest"],
      status: "github", 
      githubUrl: "https://github.com/Aladdin-Marshaha/CritoProject-React.git",
      hidden: false
        },
        { id: 6,
      title: "UserProvider - Authentication API",
      description: "School group project. A comprehensive .NET 8 Web API for user authentication and management. Features JWT-based authentication, role-based authorization (SuperUser, Admin, User), email verification system, Azure Service Bus integration, and support for both SQL Server and SQLite databases.",
      tools: [".NET 8", "ASP.NET Core Web API", "Entity Framework Core", "JWT Authentication", "ASP.NET Identity", "Azure Service Bus", "SQL Server", "SQLite", "Swagger/OpenAPI", "xUnit", "C#"],
      status: "github", 
      githubUrl: "https://github.com/Projekt-Grupp8/UserProvider",
      hidden: true
    },
    {
      id: 7,
      title: "Chat Application",
      description: "En realtidschattapplikation med privata meddelanden, gruppchatter och fildelning. Säker och skalbar arkitektur.",
      tools: ["Socket.io", "React", "Express", "PostgreSQL"],
      status: "development", // Pågående utveckling, inte klickbar
      githubUrl: null,
      hidden: true
    },
    {
      id: 8,
      title: "Test",
      description: "gj   rea ltidschattapplikation med privata meddelanden, gruppchatter och fildelning. Säker och skalbar arkitektur.",
      tools: ["Socket.io", "React", "Express", "PostgreSQL", "Firebase"],
      status: "github", // Pågående utveckling, inte klickbar
      githubUrl: "https://github.com/username/weather-dashboard", 
      hidden: true
    },
    {
      id: 3,
      title: "Test för bild modal",
      description: "En produktivitetsapp för att hantera uppgifter och projekt. Inkluderar kanban-boards, tidsplanering och teamsamarbete.",
      tools: ["C#", ".NET 8", "", "Material-UI"],
      status: "github", // Visar skärmdumpar istället för kod
      images: [
        "/src/images/pic01.jpg",
        "/src/images/bg.jpg",
        "/src/images/overlay.png"
      ],
      hidden: true
    }
  ];

  const handleProjectClick = (project) => {
    if (project.status === "showcase" && project.images) {
      // Öppna modal med bilder
      setSelectedProject(project);
      setCurrentImageIndex(0);
      setShowModal(true);
    } else if (project.status === "live" && project.liveUrl) {
      // Öppna live-versionen om den finns
      window.open(project.liveUrl, '_blank');
    } else if ((project.status === "live" || project.status === "github") && project.githubUrl) {
      // Öppna GitHub om det är live utan live-url eller om det är github-status
      window.open(project.githubUrl, '_blank');
    }
    // Gör ingenting om status är "development"
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'live': return 'Live';
      case 'github': return 'GitHub';
      case 'showcase': return 'Showcase';
      case 'development': return 'In Development';
      default: return 'Unknown';
    }
  };

  const isProjectClickable = (project) => {
    return (project.status === 'live' && (project.liveUrl || project.githubUrl)) ||
           (project.status === 'github' && project.githubUrl) ||
           (project.status === 'showcase' && project.images && project.images.length > 0);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Enkel filter för att dölja projekt baserat på hidden property
  const getVisibleProjects = () => {
    return projects.filter(project => !project.hidden);
  };

  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <h1><a>My Projects</a></h1>
          <p>A showcase of my work and development journey</p>
        </header>
        <div className="content">
          <section>
            <div className='myProjects'>
              {getVisibleProjects().map((project) => (
                <div 
                  key={project.id}
                  className={`projectBox ${!isProjectClickable(project) ? 'disabled' : ''}`}
                  onClick={() => handleProjectClick(project)}
                  style={{ cursor: isProjectClickable(project) ? 'pointer' : 'default' }}
                >
                  <div className={`projectStatus ${project.status}`}>
                    {getStatusText(project.status)}
                  </div>
                  
                  <h3 className="projectTitle">{project.title}</h3>
                  
                  <p className="projectDescription">{project.description}</p>
                  
                  <div className="projectTools">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="tool">{tool}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* Image Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="image-container">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button className="nav-button prev-button" onClick={prevImage}>
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="nav-button next-button" onClick={nextImage}>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </>
                )}
              </div>
              <div className="image-counter">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
              <p className="project-description">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;