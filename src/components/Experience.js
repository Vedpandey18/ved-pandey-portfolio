import React from 'react';
import './Experience.css';

const Experience = () => {

  const techCategories = [
    {
      id: 1,
      category: 'Programming Languages',
      icon: 'fas fa-code',
      technologies: [
        { name: 'Java', icon: 'fab fa-java', level: 'Expert' },
        { name: 'Python', icon: 'fab fa-python', level: 'Advanced' },
        { name: 'JavaScript', icon: 'fab fa-js', level: 'Advanced' },
        { name: 'TypeScript', icon: 'fab fa-js-square', level: 'Intermediate' }
      ],
      gradient: 1
    },
    {
      id: 2,
      category: 'Frameworks & Libraries',
      icon: 'fas fa-layer-group',
      technologies: [
        { name: 'Spring Boot', icon: 'fas fa-leaf', level: 'Expert' },
        { name: 'React', icon: 'fab fa-react', level: 'Advanced' },
        { name: 'Hibernate', icon: 'fas fa-database', level: 'Expert' },
        { name: 'Spring Security', icon: 'fas fa-shield-alt', level: 'Advanced' },
        { name: 'Redux', icon: 'fab fa-react', level: 'Intermediate' },
        { name: 'Spring MVC', icon: 'fas fa-code', level: 'Advanced' }
      ],
      gradient: 2
    },
    {
      id: 3,
      category: 'Databases & Storage',
      icon: 'fas fa-database',
      technologies: [
        { name: 'MySQL', icon: 'fas fa-database', level: 'Expert' },
        { name: 'PostgreSQL', icon: 'fas fa-database', level: 'Advanced' },
        { name: 'MongoDB', icon: 'fas fa-database', level: 'Intermediate' },
        { name: 'Redis', icon: 'fas fa-memory', level: 'Intermediate' }
      ],
      gradient: 3
    },
    {
      id: 4,
      category: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      technologies: [
        { name: 'Microsoft Azure', icon: 'fab fa-microsoft', level: 'Advanced' },
        { name: 'Docker', icon: 'fab fa-docker', level: 'Intermediate' },
        { name: 'Azure Data Factory', icon: 'fas fa-industry', level: 'Intermediate' },
        { name: 'ADLS Gen2', icon: 'fas fa-cloud', level: 'Intermediate' },
        { name: 'Databricks', icon: 'fas fa-sparkles', level: 'Intermediate' },
        { name: 'Nginx', icon: 'fas fa-server', level: 'Intermediate' },
        { name: 'CI/CD', icon: 'fas fa-sync-alt', level: 'Intermediate' }
      ],
      gradient: 1
    },
    {
      id: 5,
      category: 'Tools & Testing',
      icon: 'fas fa-tools',
      technologies: [
        { name: 'Git & GitHub', icon: 'fab fa-git-alt', level: 'Expert' },
        { name: 'Postman', icon: 'fas fa-paper-plane', level: 'Expert' },
        { name: 'JUnit', icon: 'fas fa-vial', level: 'Advanced' },
        { name: 'Mockito', icon: 'fas fa-flask', level: 'Advanced' },
        { name: 'Flyway', icon: 'fas fa-plane', level: 'Intermediate' },
        { name: 'Maven', icon: 'fas fa-box', level: 'Advanced' }
      ],
      gradient: 2
    },
    {
      id: 6,
      category: 'Architecture & Patterns',
      icon: 'fas fa-sitemap',
      technologies: [
        { name: 'Microservices', icon: 'fas fa-cubes', level: 'Advanced' },
        { name: 'REST APIs', icon: 'fas fa-network-wired', level: 'Expert' },
        { name: 'System Design', icon: 'fas fa-project-diagram', level: 'Advanced' },
        { name: 'Agile & Scrum', icon: 'fas fa-tasks', level: 'Advanced' },
        { name: 'Project Management', icon: 'fas fa-briefcase', level: 'Advanced' }
      ],
      gradient: 3
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return '#10b981';
      case 'Advanced': return '#6366f1';
      case 'Intermediate': return '#f59e0b';
      default: return '#64748b';
    }
  };

  const getLevelWidth = (level) => {
    switch(level) {
      case 'Expert': return '100%';
      case 'Advanced': return '75%';
      case 'Intermediate': return '50%';
      default: return '25%';
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-bg-image">
        <svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" className="bg-svg">
          <defs>
            <pattern id="techPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="rgba(99, 102, 241, 0.1)">
                <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techPattern)" />
          {/* Floating Tech Elements */}
          <g opacity="0.05">
            <circle cx="200" cy="200" r="50" fill="#6366f1">
              <animate attributeName="cy" values="200;180;200" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="400" r="40" fill="#06b6d4">
              <animate attributeName="cx" values="800;820;800" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="1500" cy="600" r="60" fill="#8b5cf6">
              <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-title">
          <h2>Tools & Technologies</h2>
          <p className="section-subtitle">Technologies and tools I've worked with throughout my career</p>
        </div>

        <div className="tech-showcase">
          {techCategories.map((category, catIndex) => (
            <div key={category.id} className="tech-category-section">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <i className={category.icon}></i>
                </div>
                <div className="category-info">
                  <h3>{category.category}</h3>
                  <span className="category-count">{category.technologies.length} Technologies</span>
                </div>
              </div>

              <div className="tech-cards-grid">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="tech-card-modern"
                    style={{
                      animationDelay: `${(catIndex * 0.1) + (techIndex * 0.05)}s`,
                      '--level-color': getLevelColor(tech.level)
                    }}
                  >
                    <div className="tech-card-header">
                      <div className="tech-card-icon" style={{ background: `linear-gradient(135deg, ${getLevelColor(tech.level)}, ${getLevelColor(tech.level)}88)` }}>
                        <i className={tech.icon}></i>
                      </div>
                      <div className="tech-card-badge" style={{ backgroundColor: `${getLevelColor(tech.level)}20`, color: getLevelColor(tech.level) }}>
                        {tech.level}
                      </div>
                    </div>
                    <div className="tech-card-body">
                      <h4>{tech.name}</h4>
                      <div className="tech-card-progress">
                        <div 
                          className="tech-card-progress-bar"
                          style={{ 
                            width: getLevelWidth(tech.level),
                            backgroundColor: getLevelColor(tech.level)
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="tech-summary">
            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="summary-content">
                <div className="summary-number">{techCategories.reduce((sum, cat) => sum + cat.technologies.length, 0)}+</div>
                <div className="summary-label">Total Technologies</div>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="summary-content">
                <div className="summary-number">{techCategories.length}</div>
                <div className="summary-label">Categories</div>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="summary-content">
                <div className="summary-number">
                  {techCategories.reduce((sum, cat) => sum + cat.technologies.filter(t => t.level === 'Expert').length, 0)}
                </div>
                <div className="summary-label">Expert Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
