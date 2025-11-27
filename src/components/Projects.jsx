import React, { useState } from 'react';

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "En fullständig e-handelsplattform med kundvagn, betalningssystem och adminpanel. Byggd med modern teknik för optimal prestanda.",
      tools: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "live", // "live", "github", eller "development"
      githubUrl: "https://github.com/username/ecommerce-project",
      liveUrl: "https://your-deployed-site.com",
      hidden: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "En responsiv portfolio-webbplats med modern design och smooth animationer. Visar mina projekt och färdigheter på ett professionellt sätt.",
      tools: ["React", "SCSS", "Vite", "EmailJS"],
      status: "live",
      githubUrl: "https://github.com/Aladdin-Marshaha/portfolio",
      liveUrl: "https://aladdin-marshaha.github.io/portfolio/",
      hidden: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "En produktivitetsapp för att hantera uppgifter och projekt. Inkluderar kanban-boards, tidsplanering och teamsamarbete.",
      tools: ["TypeScript", "React", "Firebase", "Material-UI"],
      status: "showcase", // Visar skärmdumpar istället för kod
      images: [
        "/src/images/pic01.jpg",
        "/src/images/bg.jpg",
        "/src/images/overlay.png"
      ],
      hidden: true
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "En väderapp som visar aktuellt väder och prognoser för olika städer. Integrerad med externa API:er för realtidsdata.",
      tools: ["JavaScript", "API", "CSS", "Chart.js"],
      status: "github", // Klar kod, kan klickas för att se GitHub
      githubUrl: "https://github.com/username/weather-dashboard",
      hidden: true
    },
    {
      id: 5,
      title: "Booking System",
      description: "Ett bokningssystem för restauranger och events. Hanterar reservationer, kalender och kundhantering med en intuitiv gränssnitt.",
      tools: ["Blazor", "C#", "SQL Server", "Bootstrap"],
      status: "development", // Pågående utveckling, inte klickbar
      githubUrl: null,
      hidden: false  // Gömd som exempel
    },
    {
      id: 6,
      title: "Chat Application",
      description: "En realtidschattapplikation med privata meddelanden, gruppchatter och fildelning. Säker och skalbar arkitektur.",
      tools: ["Socket.io", "React", "Express", "PostgreSQL"],
      status: "development", // Pågående utveckling, inte klickbar
      githubUrl: null,
      hidden: false
    },
    {
      id: 7,
      title: "Chat Application",
      description: "En realtidschattapplikation med privata meddelanden, gruppchatter och fildelning. Säker och skalbar arkitektur.",
      tools: ["Socket.io", "React", "Express", "PostgreSQL"],
      status: "development", // Pågående utveckling, inte klickbar
      githubUrl: null,
      hidden: false
    },
    {
      id: 8,
      title: "Test",
      description: "gj   rea ltidschattapplikation med privata meddelanden, gruppchatter och fildelning. Säker och skalbar arkitektur.",
      tools: ["Socket.io", "React", "Express", "PostgreSQL", "Firebase"],
      status: "github", // Pågående utveckling, inte klickbar
      githubUrl: "https://github.com/username/weather-dashboard", 
      hidden: false
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