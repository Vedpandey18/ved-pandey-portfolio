import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const aboutSections = [
    {
      icon: 'fas fa-user',
      title: 'Who I Am',
      content: 'I am Ved Pandey, a passionate Software Engineer with expertise in Java, Spring Boot, and Microservices architecture. I love building scalable applications and solving complex problems through innovative solutions.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      content: 'Graduated from Jain University. My engineering background has given me a strong foundation in problem-solving and systematic thinking, which I apply to software development.'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Professional Experience',
      content: 'Currently working as a freelance Software Engineer, contributing to a variety of projects and delivering scalable, reliable, and innovative software solutions. Previously worked in software engineering roles on enterprise automation platforms and inventory management systems, gaining hands-on experience with real-world business applications. I bring 4+ years of experience in building full-stack applications, designing backend services, and working with modern application architectures and cloud-based technologies, with a strong focus on clean code, scalability, and maintainability.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certifications',
      content: 'Certified in Microsoft Azure Fundamentals, CAPM, and Agile & Scrum methodologies. These certifications complement my technical skills and help me deliver projects efficiently.'
    },
    {
      icon: 'fas fa-code',
      title: 'Technical Expertise',
      content: 'My technical journey spans across the full software development lifecycle. I work extensively with Java ecosystem (Core Java 8/11/17, Spring Boot, Spring Security) to build robust backend systems, design RESTful APIs, and implement microservices architectures. On the frontend, I create interactive user interfaces with React. For data persistence, I work with relational databases like MySQL and PostgreSQL, using Hibernate for ORM. I deploy applications to cloud platforms like Microsoft Azure, containerize with Docker, and automate workflows with CI/CD pipelines. Beyond specific tools, I focus on writing clean, testable code and designing systems that scale with business needs.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'What I Do',
      content: 'I design and develop scalable software solutions that solve real-world problems. From building REST APIs to implementing microservices architecture, I focus on writing clean, maintainable code and following best practices. I enjoy working on challenging projects and continuously learning new technologies.'
    }
  ];

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '6+', label: 'Major Projects' },
    { number: '30+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p className="section-subtitle">Get to know more about my journey, skills, and passion for software development</p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-image-section">
              <div className="about-image-wrapper">
                <div className="about-image-placeholder">
                  <svg 
                    viewBox="0 0 400 400" 
                    className="profile-svg"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="profileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    
                    {/* Background Circle */}
                    <circle cx="200" cy="200" r="180" fill="url(#profileGrad)" opacity="0.1">
                      <animate attributeName="r" values="180;190;180" dur="3s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Profile Head */}
                    <circle cx="200" cy="150" r="50" fill="url(#profileGrad)">
                      <animate attributeName="cy" values="150;145;150" dur="2s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Body */}
                    <rect x="150" y="200" width="100" height="120" rx="20" fill="url(#profileGrad)">
                      <animate attributeName="y" values="200;195;200" dur="2s" begin="0.2s" repeatCount="indefinite" />
                    </rect>
                    
                    {/* Laptop/Code */}
                    <rect x="130" y="240" width="140" height="90" rx="8" fill="#1a1a1a" stroke="#06b6d4" strokeWidth="2">
                      <animate attributeName="y" values="240;235;240" dur="2s" begin="0.3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="140" y="250" width="120" height="70" rx="4" fill="#06b6d4" opacity="0.2">
                      <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
                    </rect>
                    
                    {/* Code Lines */}
                    <line x1="150" y1="270" x2="250" y2="270" stroke="#ffffff" strokeWidth="2" opacity="0.8">
                      <animate attributeName="x2" values="250;150;250" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="155" y1="285" x2="245" y2="285" stroke="#ffffff" strokeWidth="2" opacity="0.8">
                      <animate attributeName="x2" values="245;155;245" dur="2s" begin="0.3s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="300" x2="240" y2="300" stroke="#ffffff" strokeWidth="2" opacity="0.8">
                      <animate attributeName="x2" values="240;160;240" dur="2s" begin="0.6s" repeatCount="indefinite" />
                    </line>
                    
                    {/* Floating Tech Symbols */}
                    <g transform="translate(100, 100)">
                      <circle r="25" fill="rgba(99, 102, 241, 0.3)">
                        <animate attributeName="r" values="25;30;25" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="0" y="8" textAnchor="middle" fill="#6366f1" fontSize="20" fontFamily="Arial" fontWeight="bold">J</text>
                      <animateTransform attributeName="transform" type="translate" values="100,100; 100,90; 100,100" dur="3s" repeatCount="indefinite" />
                    </g>
                    <g transform="translate(300, 120)">
                      <circle r="25" fill="rgba(6, 182, 212, 0.3)">
                        <animate attributeName="r" values="25;30;25" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="0" y="8" textAnchor="middle" fill="#06b6d4" fontSize="20" fontFamily="Arial" fontWeight="bold">R</text>
                      <animateTransform attributeName="transform" type="translate" values="300,120; 300,110; 300,120" dur="3s" begin="0.5s" repeatCount="indefinite" />
                    </g>
                    <g transform="translate(80, 320)">
                      <circle r="25" fill="rgba(139, 92, 246, 0.3)">
                        <animate attributeName="r" values="25;30;25" dur="2s" begin="1s" repeatCount="indefinite" />
                      </circle>
                      <text x="0" y="8" textAnchor="middle" fill="#8b5cf6" fontSize="20" fontFamily="Arial" fontWeight="bold">S</text>
                      <animateTransform attributeName="transform" type="translate" values="80,320; 80,310; 80,320" dur="3s" begin="1s" repeatCount="indefinite" />
                    </g>
                    <g transform="translate(320, 320)">
                      <circle r="25" fill="rgba(16, 185, 129, 0.3)">
                        <animate attributeName="r" values="25;30;25" dur="2s" begin="1.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="0" y="8" textAnchor="middle" fill="#10b981" fontSize="20" fontFamily="Arial" fontWeight="bold">M</text>
                      <animateTransform attributeName="transform" type="translate" values="320,320; 320,310; 320,320" dur="3s" begin="1.5s" repeatCount="indefinite" />
                    </g>
                  </svg>
                </div>
                {/* Additional Animated SVG Background Elements */}
                <svg className="about-bg-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                  {/* Animated Lines */}
                  <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1">
                    <animate attributeName="stroke-dasharray" values="0,400; 400,0" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="0" y1="350" x2="400" y2="350" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1">
                    <animate attributeName="stroke-dasharray" values="0,400; 400,0" dur="3s" begin="1s" repeatCount="indefinite" />
                  </line>
                  {/* Floating Particles */}
                  <circle cx="50" cy="100" r="3" fill="#6366f1" opacity="0.5">
                    <animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="350" cy="300" r="3" fill="#06b6d4" opacity="0.5">
                    <animate attributeName="cy" values="300;280;300" dur="3s" begin="1s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <div className="floating-icons">
                  <div className="floating-icon" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>
                    <i className="fab fa-java"></i>
                  </div>
                  <div className="floating-icon" style={{ top: '20%', right: '10%', animationDelay: '0.5s' }}>
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="floating-icon" style={{ bottom: '15%', left: '10%', animationDelay: '1s' }}>
                    <i className="fas fa-cloud"></i>
                  </div>
                  <div className="floating-icon" style={{ bottom: '10%', right: '5%', animationDelay: '1.5s' }}>
                    <i className="fas fa-database"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-text-section">
              <div className="about-intro">
                <h3>Hello! I'm Ved Pandey</h3>
                <p className="intro-text">
                  A dedicated Software Engineer with 4+ years of experience, currently freelancing and 
                  passionate about creating innovative solutions and building scalable applications. 
                  With expertise in Java, Spring Boot, and modern web technologies, I transform ideas 
                  into reality through clean code and best practices.
                </p>
              </div>

              <div className="about-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-sections-grid">
            {aboutSections.map((section, index) => {
              const isExpanded = expandedCards[index];
              const previewLength = 100;
              const preview = section.content.substring(0, previewLength) + '...';
              
              return (
                <div 
                  key={index} 
                  className={`about-card ${isExpanded ? 'expanded' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setExpandedCards(prev => ({
                    ...prev,
                    [index]: !prev[index]
                  }))}
                >
                  <div className="about-card-header">
                    <div className="about-card-icon">
                      <i className={section.icon}></i>
                    </div>
                    <h4>{section.title}</h4>
                    <button className="expand-icon">
                      <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                    </button>
                  </div>
                  <div className={`about-card-content ${isExpanded ? 'expanded' : ''}`}>
                    <p>{isExpanded ? section.content : preview}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
