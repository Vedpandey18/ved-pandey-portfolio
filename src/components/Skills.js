import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = skillCardsRef.current;
    if (cards && Array.isArray(cards)) {
      cards.forEach((card) => {
        if (card) observer.observe(card);
      });
    }

    return () => {
      if (cards && Array.isArray(cards)) {
        cards.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      }
    };
  }, []);

  const skills = [
    {
      icon: 'fas fa-code',
      title: 'Core Technologies',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
      tags: [
        'Java 8/11/17',
        'Spring Boot',
        'Microservices',
        'REST APIs',
        'Hibernate',
        'Spring Security',
        'Python',
        'Web Services'
      ],
      gradient: 1
    },
    {
      icon: 'fas fa-database',
      title: 'Database & Tools',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
      tags: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Git & GitHub',
        'Postman',
        'JUnit',
        'Mockito',
        'Docker'
      ],
      gradient: 2
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud & Methodologies',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
      tags: [
        'Microsoft Azure',
        'Azure Data Factory',
        'ADLS Gen2',
        'Databricks',
        'Agile & Scrum',
        'Project Management',
        'CI/CD',
        'System Design'
      ],
      gradient: 3
    }
  ];

  return (
    <section id="skills" style={{ position: 'relative' }}>
      {/* Background SVG Animation */}
      <svg className="skills-bg-svg" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.05 }}>
        {/* Animated Grid */}
        <defs>
          <pattern id="gridPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
            </path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
        {/* Floating Tech Symbols */}
        <text x="200" y="200" fill="#6366f1" fontSize="40" fontFamily="monospace" opacity="0.1">
          {'< />'}
          <animateTransform attributeName="transform" type="translate" values="0,0; 20,20; 0,0" dur="5s" repeatCount="indefinite" />
        </text>
        <text x="1500" y="800" fill="#06b6d4" fontSize="40" fontFamily="monospace" opacity="0.1">
          {'{ }'}
          <animateTransform attributeName="transform" type="translate" values="0,0; -20,-20; 0,0" dur="5s" repeatCount="indefinite" />
        </text>
      </svg>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-title">
          <h2>Technical Expertise</h2>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillCardsRef.current[index] = el)}
              className={`skill-card gradient-${skill.gradient}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-card-image">
                {skill.gradient === 1 && (
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="skill-svg">
                    <defs>
                      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    {/* Code Editor */}
                    <rect x="50" y="30" width="300" height="140" rx="8" fill="#1a1a1a" stroke="#6366f1" strokeWidth="2" />
                    <rect x="60" y="40" width="280" height="25" rx="4" fill="#6366f1" opacity="0.2" />
                    {/* Code Lines */}
                    <line x1="70" y1="80" x2="330" y2="80" stroke="#6366f1" strokeWidth="2">
                      <animate attributeName="x2" values="330;70;330" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="75" y1="105" x2="325" y2="105" stroke="#8b5cf6" strokeWidth="2">
                      <animate attributeName="x2" values="325;75;325" dur="2s" begin="0.3s" repeatCount="indefinite" />
                    </line>
                    <line x1="80" y1="130" x2="320" y2="130" stroke="#06b6d4" strokeWidth="2">
                      <animate attributeName="x2" values="320;80;320" dur="2s" begin="0.6s" repeatCount="indefinite" />
                    </line>
                    {/* Floating Brackets */}
                    <text x="50" y="100" fill="#6366f1" fontSize="30" fontFamily="monospace">{'{'}</text>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 5,0; 0,0" dur="2s" repeatCount="indefinite" />
                    <text x="350" y="100" fill="#6366f1" fontSize="30" fontFamily="monospace">{'}'}</text>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -5,0; 0,0" dur="2s" repeatCount="indefinite" />
                  </svg>
                )}
                {skill.gradient === 2 && (
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="skill-svg">
                    <defs>
                      <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    {/* Database Cylinder */}
                    <ellipse cx="200" cy="50" rx="80" ry="20" fill="url(#dbGrad)" />
                    <rect x="120" y="50" width="160" height="100" fill="none" stroke="#06b6d4" strokeWidth="3" />
                    <ellipse cx="200" cy="150" rx="80" ry="20" fill="url(#dbGrad)" />
                    {/* Data Lines */}
                    <line x1="140" y1="70" x2="260" y2="70" stroke="#06b6d4" strokeWidth="2">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="140" y1="100" x2="260" y2="100" stroke="#06b6d4" strokeWidth="2">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
                    </line>
                    <line x1="140" y1="130" x2="260" y2="130" stroke="#06b6d4" strokeWidth="2">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
                    </line>
                    {/* Floating Icons */}
                    <circle cx="100" cy="100" r="15" fill="rgba(6, 182, 212, 0.3)">
                      <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="100" r="15" fill="rgba(59, 130, 246, 0.3)">
                      <animate attributeName="r" values="15;20;15" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                )}
                {skill.gradient === 3 && (
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="skill-svg">
                    <defs>
                      <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    {/* Cloud */}
                    <circle cx="150" cy="100" r="40" fill="url(#cloudGrad)" opacity="0.8">
                      <animate attributeName="cy" values="100;95;100" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="200" cy="100" r="50" fill="url(#cloudGrad)" opacity="0.8">
                      <animate attributeName="cy" values="100;95;100" dur="2s" begin="0.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="100" r="40" fill="url(#cloudGrad)" opacity="0.8">
                      <animate attributeName="cy" values="100;95;100" dur="2s" begin="0.4s" repeatCount="indefinite" />
                    </circle>
                    {/* Server/Infrastructure */}
                    <rect x="50" y="130" width="300" height="50" rx="5" fill="#1a1a1a" stroke="#10b981" strokeWidth="2" />
                    <rect x="60" y="140" width="280" height="8" rx="2" fill="#10b981" opacity="0.5">
                      <animate attributeName="width" values="280;140;280" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="60" y="155" width="280" height="8" rx="2" fill="#3b82f6" opacity="0.5">
                      <animate attributeName="width" values="280;200;280" dur="2s" begin="0.3s" repeatCount="indefinite" />
                    </rect>
                    {/* Arrows */}
                    <path d="M 200 80 L 200 60 M 190 70 L 200 60 L 210 70" stroke="#10b981" strokeWidth="2" fill="none">
                      <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="2s" repeatCount="indefinite" />
                    </path>
                  </svg>
                )}
              </div>
              <div className={`skill-icon gradient-${skill.gradient}`}>
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`skill-tag gradient-${skill.gradient}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
