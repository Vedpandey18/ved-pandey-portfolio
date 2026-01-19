import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: 'technical',
      title: 'TradeLogix – Trading Journal Application',
      shortDescription: 'Full-stack trading journal application enabling traders to record, track, and analyze trades with automated performance metrics and interactive dashboards.',
      fullDescription: 'Developed TradeLogix, a full-stack Trading Journal application that enables traders to systematically record, track, and analyze their trades. The platform allows users to log detailed trade information including entry and exit prices, quantity, strategy, and notes, and automatically calculates key performance metrics such as profit/loss, win rate, risk–reward ratio, and drawdowns. Interactive dashboards with visual analytics like equity curves and cumulative P&L help traders identify profitable strategies and behavioral patterns, improving discipline and data-driven decision-making.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      tech: ['React', 'Spring Boot', 'MySQL', 'Data Analytics', 'Chart.js', 'REST API', 'JWT'],
      github: 'https://github.com/vedpandey18/tradelogix',
      demo: '#',
      gradient: 1
    },
    {
      id: 2,
      category: 'technical',
      title: 'Amor Y Momentos – Multi-Vendor E-Commerce Platform',
      shortDescription: 'Scalable subscription-based multi-vendor e-commerce platform with Stripe integration, Docker containerization, and modern React frontend with Redux state management.',
      fullDescription: 'Designed and developed Amor Y Momentos, a scalable, subscription-based multi-vendor e-commerce platform built with React and Spring Boot. The application supports seller onboarding, product management, shopping cart, order processing, and secure user authentication using JWT-based security. Implemented a subscription model with Stripe integration to enforce plan-based feature access for sellers, along with webhook-driven subscription state synchronization. The backend follows a layered architecture with Spring Data JPA, MySQL, Redis caching, and Flyway migrations, while the frontend uses modern React tooling with Redux, internationalization, and responsive UI. The system is containerized using Docker, deployed behind Nginx, and designed with scalability, security, and future microservices migration in mind.',
      image: 'https://media.giphy.com/media/26n7b7PjSOZJwVCmY/giphy.gif',
      fallbackImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      tech: ['React', 'Redux', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Nginx', 'Stripe', 'JWT', 'Flyway'],
      github: 'https://github.com/vedpandey18/amor-y-momentos',
      demo: '#',
      gradient: 2
    },
    {
      id: 3,
      category: 'technical',
      title: 'E-commerce Platform',
      shortDescription: 'Comprehensive full-stack e-commerce solution with product catalog, shopping cart, secure payment integration, and admin dashboard.',
      fullDescription: 'A comprehensive full-stack e-commerce solution featuring product catalog, shopping cart, secure payment integration, and admin dashboard. Built with Spring Boot backend and MySQL database, implementing RESTful APIs with JWT authentication.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop',
      tech: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'JWT', 'Postman'],
      github: 'https://github.com/vedpandey18/ecommerce-app',
      demo: '#',
      gradient: 3
    },
    {
      id: 4,
      category: 'technical',
      title: 'NEOIBALL 2.3 - Business Automation',
      shortDescription: 'Enterprise automation platform streamlining sales, marketing, and customer management workflows with scalable microservices architecture.',
      fullDescription: 'Enterprise automation platform streamlining sales, marketing, and customer management workflows. Features unified customer interaction tracking, automated reporting, and scalable microservices architecture with Hibernate ORM.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
      tech: ['Java', 'Microservices', 'Hibernate', 'Spring Boot', 'MySQL', 'REST'],
      github: 'https://github.com/vedpandey18/business-automation',
      demo: null,
      gradient: 1
    },
    {
      id: 5,
      category: 'technical',
      title: 'Inventory Reconciliation System',
      shortDescription: 'Enterprise inventory management solution reducing discrepancies by 30% with real-time tracking, automated reconciliation, and comprehensive reporting.',
      fullDescription: 'Enterprise inventory management solution reducing discrepancies by 30%. Features real-time tracking, automated reconciliation, barcode scanning, and comprehensive reporting with streamlined workflows for optimal operational efficiency.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
      tech: ['Java', 'MySQL', 'Git', 'REST API', 'Spring MVC', 'JUnit'],
      github: 'https://github.com/vedpandey18/inventory-system',
      demo: null,
      gradient: 2
    },
    {
      id: 6,
      category: 'journey',
      title: 'Professional Journey Timeline',
      shortDescription: 'Interactive career progression visualization showcasing growth from Java Developer to Software Engineer with animated timeline and skill charts.',
      fullDescription: 'Interactive career progression visualization showcasing my growth from Java Developer to Software Engineer. Features animated timeline, skill progression charts, and milestone achievements with detailed insights into each career phase.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
      tech: ['Career Growth', 'Timeline', 'Data Visualization', 'Progress Tracking', 'Milestones', 'Achievements'],
      github: '#experience',
      demo: '#experience',
      gradient: 4
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [selectedProject]);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-filter">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            <i className="fas fa-layer-group"></i> All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveFilter('technical')}
          >
            <i className="fas fa-code"></i> Technical Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === 'journey' ? 'active' : ''}`}
            onClick={() => setActiveFilter('journey')}
          >
            <i className="fas fa-road"></i> Professional Journey
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card gradient-${project.gradient} clickable`}
              style={{ animationDelay: `${project.id * 0.1}s` }}
              onClick={() => handleCardClick(project)}
            >
              <div className="project-img">
                <div className={`project-category gradient-${project.gradient}`}>
                  {project.category === 'technical' 
                    ? (project.id === 1 ? 'Trading Platform' : project.id === 2 ? 'E-Commerce' : 'Full Stack')
                    : 'Career Journey'}
                </div>
                <div className="project-svg-container">
                  {project.id === 1 && (
                    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
                      <defs>
                        <linearGradient id="tradingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Chart Background */}
                      <rect x="50" y="30" width="300" height="150" rx="8" fill="#1a1a1a" stroke="#6366f1" strokeWidth="2" />
                      {/* Chart Lines */}
                      <polyline points="70,150 120,120 170,100 220,80 270,90 320,70 350,60" 
                        fill="none" stroke="url(#tradingGrad)" strokeWidth="3">
                        <animate attributeName="points" 
                          values="70,150 120,120 170,100 220,80 270,90 320,70 350,60; 70,140 120,110 170,90 220,70 270,80 320,60 350,50; 70,150 120,120 170,100 220,80 270,90 320,70 350,60" 
                          dur="3s" repeatCount="indefinite" />
                      </polyline>
                      {/* Data Points */}
                      <circle cx="120" cy="120" r="5" fill="#6366f1">
                        <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="220" cy="80" r="5" fill="#8b5cf6">
                        <animate attributeName="r" values="5;8;5" dur="2s" begin="0.3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="320" cy="70" r="5" fill="#06b6d4">
                        <animate attributeName="r" values="5;8;5" dur="2s" begin="0.6s" repeatCount="indefinite" />
                      </circle>
                      {/* Grid Lines */}
                      <line x1="50" y1="100" x2="350" y2="100" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
                      <line x1="50" y1="130" x2="350" y2="130" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
                    </svg>
                  )}
                  {project.id === 2 && (
                    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
                      <defs>
                        <linearGradient id="ecommerceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Shopping Cart */}
                      <rect x="150" y="80" width="100" height="80" rx="5" fill="#1a1a1a" stroke="#06b6d4" strokeWidth="2">
                        <animate attributeName="y" values="80;75;80" dur="2s" repeatCount="indefinite" />
                      </rect>
                      {/* Cart Items */}
                      <circle cx="170" cy="100" r="12" fill="url(#ecommerceGrad)">
                        <animate attributeName="cy" values="100;95;100" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="200" cy="110" r="12" fill="url(#ecommerceGrad)">
                        <animate attributeName="cy" values="110;105;110" dur="2s" begin="0.2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="230" cy="100" r="12" fill="url(#ecommerceGrad)">
                        <animate attributeName="cy" values="100;95;100" dur="2s" begin="0.4s" repeatCount="indefinite" />
                      </circle>
                      {/* Cart Handle */}
                      <path d="M 150 80 L 140 60 L 160 60 Z" fill="#06b6d4" />
                      {/* Shopping Bag */}
                      <rect x="250" y="100" width="60" height="80" rx="5" fill="none" stroke="#3b82f6" strokeWidth="2">
                        <animate attributeName="y" values="100;95;100" dur="2s" begin="0.3s" repeatCount="indefinite" />
                      </rect>
                      <path d="M 270 100 Q 280 90 290 100" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      {/* Stars/Reviews */}
                      <polygon points="50,50 55,60 65,60 57,67 60,77 50,72 40,77 43,67 35,60 45,60" fill="#f59e0b">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </polygon>
                    </svg>
                  )}
                  {project.id === 3 && (
                    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
                      <defs>
                        <linearGradient id="platformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Platform/Server */}
                      <rect x="100" y="60" width="200" height="120" rx="8" fill="#1a1a1a" stroke="#10b981" strokeWidth="2" />
                      {/* Server Layers */}
                      <rect x="110" y="75" width="180" height="25" rx="3" fill="url(#platformGrad)" opacity="0.3">
                        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                      </rect>
                      <rect x="110" y="110" width="180" height="25" rx="3" fill="url(#platformGrad)" opacity="0.3">
                        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
                      </rect>
                      <rect x="110" y="145" width="180" height="25" rx="3" fill="url(#platformGrad)" opacity="0.3">
                        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
                      </rect>
                      {/* Connection Lines */}
                      <line x1="50" y1="120" x2="100" y2="120" stroke="#10b981" strokeWidth="2">
                        <animate attributeName="x2" values="100;50;100" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="300" y1="120" x2="350" y2="120" stroke="#3b82f6" strokeWidth="2">
                        <animate attributeName="x1" values="300;350;300" dur="2s" repeatCount="indefinite" />
                      </line>
                    </svg>
                  )}
                  {project.id === 4 && (
                    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
                      <defs>
                        <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Automation Flow */}
                      <rect x="80" y="80" width="80" height="60" rx="5" fill="#1a1a1a" stroke="#6366f1" strokeWidth="2">
                        <animate attributeName="x" values="80;85;80" dur="2s" repeatCount="indefinite" />
                      </rect>
                      <path d="M 160 110 L 200 110" stroke="#6366f1" strokeWidth="3" fill="none">
                        <animate attributeName="stroke-dasharray" values="0,40; 40,0; 0,40" dur="2s" repeatCount="indefinite" />
                      </path>
                      <rect x="200" y="80" width="80" height="60" rx="5" fill="#1a1a1a" stroke="#8b5cf6" strokeWidth="2">
                        <animate attributeName="x" values="200;205;200" dur="2s" begin="0.3s" repeatCount="indefinite" />
                      </rect>
                      <path d="M 280 110 L 320 110" stroke="#8b5cf6" strokeWidth="3" fill="none">
                        <animate attributeName="stroke-dasharray" values="0,40; 40,0; 0,40" dur="2s" begin="0.3s" repeatCount="indefinite" />
                      </path>
                      {/* Gears */}
                      <circle cx="120" cy="110" r="15" fill="none" stroke="#6366f1" strokeWidth="2">
                        <animateTransform attributeName="transform" type="rotate" values="0 120 110;360 120 110" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="240" cy="110" r="15" fill="none" stroke="#8b5cf6" strokeWidth="2">
                        <animateTransform attributeName="transform" type="rotate" values="360 240 110;0 240 110" dur="3s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                  {project.id === 5 && (
                    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
                      <defs>
                        <linearGradient id="inventoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Inventory Boxes */}
                      <rect x="100" y="60" width="60" height="60" rx="5" fill="#1a1a1a" stroke="#06b6d4" strokeWidth="2">
                        <animate attributeName="y" values="60;55;60" dur="2s" repeatCount="indefinite" />
                      </rect>
                      <rect x="180" y="80" width="60" height="60" rx="5" fill="#1a1a1a" stroke="#06b6d4" strokeWidth="2">
                        <animate attributeName="y" values="80;75;80" dur="2s" begin="0.2s" repeatCount="indefinite" />
                      </rect>
                      <rect x="260" y="70" width="60" height="60" rx="5" fill="#1a1a1a" stroke="#3b82f6" strokeWidth="2">
                        <animate attributeName="y" values="70;65;70" dur="2s" begin="0.4s" repeatCount="indefinite" />
                      </rect>
                      {/* Checkmarks */}
                      <path d="M 120 90 L 135 105 L 155 85" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round">
                        <animate attributeName="stroke-dasharray" values="0,50; 50,0" dur="1s" repeatCount="indefinite" />
                      </path>
                      <path d="M 200 110 L 215 125 L 235 105" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round">
                        <animate attributeName="stroke-dasharray" values="0,50; 50,0" dur="1s" begin="0.3s" repeatCount="indefinite" />
                      </path>
                      {/* Barcode */}
                      <rect x="110" y="130" width="3" height="20" fill="#06b6d4" />
                      <rect x="118" y="130" width="3" height="20" fill="#06b6d4" />
                      <rect x="125" y="130" width="5" height="20" fill="#06b6d4" />
                      <rect x="135" y="130" width="2" height="20" fill="#06b6d4" />
                    </svg>
                  )}
                  {project.id === 6 && (
                    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
                      <defs>
                        <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Timeline */}
                      <line x1="50" y1="110" x2="350" y2="110" stroke="url(#journeyGrad)" strokeWidth="4">
                        <animate attributeName="x2" values="50;350;50" dur="3s" repeatCount="indefinite" />
                      </line>
                      {/* Milestones */}
                      <circle cx="100" cy="110" r="12" fill="url(#journeyGrad)">
                        <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="200" cy="110" r="12" fill="url(#journeyGrad)">
                        <animate attributeName="r" values="12;18;12" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="300" cy="110" r="12" fill="url(#journeyGrad)">
                        <animate attributeName="r" values="12;18;12" dur="2s" begin="1s" repeatCount="indefinite" />
                      </circle>
                      {/* Growth Arrow */}
                      <path d="M 50 60 L 350 60 L 340 50 M 350 60 L 340 70" stroke="url(#journeyGrad)" strokeWidth="3" fill="none">
                        <animate attributeName="stroke-dasharray" values="0,300; 300,0" dur="2s" repeatCount="indefinite" />
                      </path>
                      {/* Stars */}
                      <polygon points="80,50 82,55 87,55 83,58 85,63 80,60 75,63 77,58 73,55 78,55" fill="#f59e0b">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </polygon>
                    </svg>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>

                <div className="project-tech">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag">+{project.tech.length - 4} more</span>
                  )}
                </div>

                <div className="view-details-btn">
                  <i className="fas fa-arrow-right"></i> View Details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <div className="modal-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = selectedProject.fallbackImage;
                  }}
                />
                <div className={`modal-category gradient-${selectedProject.gradient}`}>
                  {selectedProject.category === 'technical' 
                    ? (selectedProject.id === 1 ? 'Trading Platform' : selectedProject.id === 2 ? 'E-Commerce' : 'Full Stack')
                    : 'Career Journey'}
                </div>
              </div>
            </div>

            <div className="modal-content">
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.fullDescription}</p>

              <div className="modal-tech-section">
                <h3>Technologies Used</h3>
                <div className="modal-tech-tags">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    className="modal-link github"
                    target={selectedProject.github.startsWith('http') ? '_blank' : undefined}
                    rel={selectedProject.github.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (selectedProject.github.startsWith('#')) {
                        e.preventDefault();
                        closeModal();
                        scrollToSection(selectedProject.github.substring(1));
                      }
                    }}
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className="modal-link demo"
                    target={selectedProject.demo.startsWith('http') ? '_blank' : undefined}
                    rel={selectedProject.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (selectedProject.demo.startsWith('#')) {
                        e.preventDefault();
                        closeModal();
                        scrollToSection(selectedProject.demo.substring(1));
                      }
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i> {selectedProject.category === 'journey' ? 'View Journey' : 'Live Demo'}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
