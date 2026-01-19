import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = serviceCardsRef.current;
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

  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: 'fas fa-laptop-code',
      description: 'Full-stack web applications using React, Java, Spring Boot, and modern frameworks. Responsive, scalable, and user-friendly solutions.',
      features: ['Frontend Development', 'Backend Development', 'Full-Stack Solutions', 'Responsive Design'],
      gradient: 1,
      position: 'large'
    },
    {
      id: 2,
      title: 'REST API Development',
      icon: 'fas fa-plug',
      description: 'Design and develop robust RESTful APIs with proper authentication, documentation, and error handling.',
      features: ['API Design', 'Spring Boot APIs', 'JWT Authentication', 'API Documentation'],
      gradient: 2,
      position: 'medium'
    },
    {
      id: 3,
      title: 'Database Design',
      icon: 'fas fa-database',
      description: 'Database architecture, optimization, and management for MySQL, PostgreSQL, and MongoDB.',
      features: ['Schema Design', 'Query Optimization', 'Data Migration', 'Performance Tuning'],
      gradient: 3,
      position: 'medium'
    },
    {
      id: 4,
      title: 'Microservices Architecture',
      icon: 'fas fa-sitemap',
      description: 'Build scalable microservices architectures with service communication, load balancing, and fault tolerance.',
      features: ['Service Design', 'API Gateway', 'Service Discovery', 'Distributed Systems'],
      gradient: 1,
      position: 'large'
    },
    {
      id: 5,
      title: 'Cloud & Deployment',
      icon: 'fas fa-cloud',
      description: 'Deploy applications to Microsoft Azure with CI/CD pipelines, containerization, and cloud infrastructure.',
      features: ['Azure Services', 'Docker & Containers', 'CI/CD Pipelines', 'Cloud Architecture'],
      gradient: 2,
      position: 'medium'
    },
    {
      id: 6,
      title: 'System Design',
      icon: 'fas fa-project-diagram',
      description: 'Design scalable, high-performance systems with proper architecture patterns and best practices.',
      features: ['System Architecture', 'Scalability Planning', 'Performance Optimization', 'Best Practices'],
      gradient: 3,
      position: 'medium'
    },
    {
      id: 7,
      title: 'Project Management',
      icon: 'fas fa-tasks',
      description: 'Agile project management, sprint planning, and team coordination for successful project delivery.',
      features: ['Agile & Scrum', 'Sprint Planning', 'Team Coordination', 'Project Delivery'],
      gradient: 1,
      position: 'small'
    }
  ];

  const getServiceSVG = (serviceId, gradient) => {
    const svgConfigs = {
      1: (
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="service-svg">
          <defs>
            <linearGradient id={`webGrad${serviceId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Browser Window */}
          <rect x="50" y="40" width="300" height="180" rx="8" fill="#1a1a1a" stroke={`url(#webGrad${serviceId})`} strokeWidth="2" />
          <rect x="60" y="50" width="280" height="30" rx="4" fill={`url(#webGrad${serviceId})`} opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
          </rect>
          {/* Code Lines */}
          <line x1="70" y1="100" x2="330" y2="100" stroke="#6366f1" strokeWidth="2">
            <animate attributeName="x2" values="330;70;330" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="75" y1="130" x2="325" y2="130" stroke="#8b5cf6" strokeWidth="2">
            <animate attributeName="x2" values="325;75;325" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </line>
          <line x1="80" y1="160" x2="320" y2="160" stroke="#06b6d4" strokeWidth="2">
            <animate attributeName="x2" values="320;80;320" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </line>
          {/* Browser Dots */}
          <circle cx="80" cy="65" r="5" fill="#ef4444">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="65" r="5" fill="#f59e0b">
            <animate attributeName="r" values="5;7;5" dur="2s" begin="0.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="65" r="5" fill="#10b981">
            <animate attributeName="r" values="5;7;5" dur="2s" begin="0.4s" repeatCount="indefinite" />
          </circle>
        </svg>
      ),
      2: (
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="service-svg">
          <defs>
            <linearGradient id={`apiGrad${serviceId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* API Nodes */}
          <circle cx="100" cy="125" r="30" fill="#1a1a1a" stroke={`url(#apiGrad${serviceId})`} strokeWidth="2">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="100" y="132" textAnchor="middle" fill="#06b6d4" fontSize="20" fontFamily="Arial" fontWeight="bold">API</text>
          <circle cx="300" cy="125" r="30" fill="#1a1a1a" stroke={`url(#apiGrad${serviceId})`} strokeWidth="2">
            <animate attributeName="r" values="30;35;30" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <text x="300" y="132" textAnchor="middle" fill="#3b82f6" fontSize="20" fontFamily="Arial" fontWeight="bold">API</text>
          {/* Connection Lines */}
          <line x1="130" y1="125" x2="270" y2="125" stroke={`url(#apiGrad${serviceId})`} strokeWidth="3">
            <animate attributeName="stroke-dasharray" values="0,140; 140,0" dur="2s" repeatCount="indefinite" />
          </line>
          {/* Request/Response Arrows */}
          <path d="M 200 110 L 210 125 L 200 140 M 200 110 L 190 125 L 200 140" stroke="#06b6d4" strokeWidth="2" fill="none">
            <animateTransform attributeName="transform" type="translate" values="0,0; 70,0; 0,0" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      ),
      3: (
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="service-svg">
          <defs>
            <linearGradient id={`dbGrad${serviceId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Database Cylinder */}
          <ellipse cx="200" cy="60" rx="80" ry="20" fill={`url(#dbGrad${serviceId})`} />
          <rect x="120" y="60" width="160" height="120" fill="none" stroke="#10b981" strokeWidth="3" />
          <ellipse cx="200" cy="180" rx="80" ry="20" fill={`url(#dbGrad${serviceId})`} />
          {/* Data Lines */}
          <line x1="140" y1="90" x2="260" y2="90" stroke="#10b981" strokeWidth="2">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="120" x2="260" y2="120" stroke="#10b981" strokeWidth="2">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="150" x2="260" y2="150" stroke="#10b981" strokeWidth="2">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </line>
          {/* Keys */}
          <rect x="50" y="100" width="40" height="20" rx="3" fill="#3b82f6" opacity="0.6">
            <animateTransform attributeName="transform" type="translate" values="0,0; 10,0; 0,0" dur="2s" repeatCount="indefinite" />
          </rect>
        </svg>
      ),
      4: (
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="service-svg">
          <defs>
            <linearGradient id={`microGrad${serviceId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Microservices */}
          <rect x="50" y="80" width="80" height="80" rx="8" fill="#1a1a1a" stroke="#6366f1" strokeWidth="2">
            <animate attributeName="y" values="80;75;80" dur="2s" repeatCount="indefinite" />
          </rect>
          <text x="90" y="130" textAnchor="middle" fill="#6366f1" fontSize="14" fontFamily="Arial">Svc1</text>
          <rect x="160" y="100" width="80" height="80" rx="8" fill="#1a1a1a" stroke="#8b5cf6" strokeWidth="2">
            <animate attributeName="y" values="100;95;100" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </rect>
          <text x="200" y="150" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontFamily="Arial">Svc2</text>
          <rect x="270" y="90" width="80" height="80" rx="8" fill="#1a1a1a" stroke="#06b6d4" strokeWidth="2">
            <animate attributeName="y" values="90;85;90" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </rect>
          <text x="310" y="140" textAnchor="middle" fill="#06b6d4" fontSize="14" fontFamily="Arial">Svc3</text>
          {/* Connection Lines */}
          <line x1="130" y1="120" x2="160" y2="140" stroke="#6366f1" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="240" y1="140" x2="270" y2="130" stroke="#8b5cf6" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </line>
        </svg>
      ),
      5: (
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="service-svg">
          <defs>
            <linearGradient id={`cloudGrad${serviceId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Cloud */}
          <circle cx="150" cy="100" r="40" fill={`url(#cloudGrad${serviceId})`} opacity="0.8">
            <animate attributeName="cy" values="100;95;100" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="100" r="50" fill={`url(#cloudGrad${serviceId})`} opacity="0.8">
            <animate attributeName="cy" values="100;95;100" dur="2s" begin="0.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="100" r="40" fill={`url(#cloudGrad${serviceId})`} opacity="0.8">
            <animate attributeName="cy" values="100;95;100" dur="2s" begin="0.4s" repeatCount="indefinite" />
          </circle>
          {/* Server/Container */}
          <rect x="50" y="150" width="300" height="60" rx="5" fill="#1a1a1a" stroke="#10b981" strokeWidth="2" />
          <rect x="60" y="160" width="280" height="10" rx="2" fill="#10b981" opacity="0.5">
            <animate attributeName="width" values="280;140;280" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="60" y="175" width="280" height="10" rx="2" fill="#3b82f6" opacity="0.5">
            <animate attributeName="width" values="280;200;280" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </rect>
          {/* Deployment Arrow */}
          <path d="M 200 80 L 200 60 M 190 70 L 200 60 L 210 70" stroke="#10b981" strokeWidth="3" fill="none">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      ),
      6: (
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="service-svg">
          <defs>
            <linearGradient id={`systemGrad${serviceId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* System Architecture */}
          <rect x="100" y="60" width="200" height="130" rx="8" fill="#1a1a1a" stroke={`url(#systemGrad${serviceId})`} strokeWidth="2" />
          {/* Layers */}
          <rect x="110" y="75" width="180" height="25" rx="3" fill={`url(#systemGrad${serviceId})`} opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="110" y="110" width="180" height="25" rx="3" fill={`url(#systemGrad${serviceId})`} opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </rect>
          <rect x="110" y="145" width="180" height="25" rx="3" fill={`url(#systemGrad${serviceId})`} opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </rect>
          {/* Connection Points */}
          <circle cx="50" cy="125" r="8" fill="#6366f1">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="125" r="8" fill="#06b6d4">
            <animate attributeName="r" values="8;12;8" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          {/* Connection Lines */}
          <line x1="58" y1="125" x2="100" y2="125" stroke="#6366f1" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0,42; 42,0" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="300" y1="125" x2="342" y2="125" stroke="#06b6d4" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0,42; 42,0" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </line>
        </svg>
      ),
      7: (
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="service-svg">
          <defs>
            <linearGradient id={`pmGrad${serviceId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Task Board */}
          <rect x="80" y="60" width="240" height="140" rx="8" fill="#1a1a1a" stroke={`url(#pmGrad${serviceId})`} strokeWidth="2" />
          {/* Task Cards */}
          <rect x="100" y="80" width="200" height="30" rx="4" fill="#f59e0b" opacity="0.3">
            <animate attributeName="y" values="80;75;80" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="100" y="120" width="200" height="30" rx="4" fill="#ef4444" opacity="0.3">
            <animate attributeName="y" values="120;115;120" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </rect>
          <rect x="100" y="160" width="200" height="30" rx="4" fill="#10b981" opacity="0.3">
            <animate attributeName="y" values="160;155;160" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </rect>
          {/* Checkmarks */}
          <path d="M 110 95 L 120 105 L 135 90" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round">
            <animate attributeName="stroke-dasharray" values="0,30; 30,0" dur="1s" repeatCount="indefinite" />
          </path>
        </svg>
      )
    };
    return svgConfigs[serviceId] || null;
  };

  return (
    <section id="services" className="services">
      {/* Background SVG Pattern */}
      <svg className="services-bg-svg" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.03 }}>
        <defs>
          <pattern id="servicesPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
            <circle cx="75" cy="75" r="3" fill="#6366f1">
              <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#servicesPattern)" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-title">
          <h2>Services I Provide</h2>
          <p className="section-subtitle">From web development to deployment - comprehensive solutions for your business needs</p>
        </div>

        <div className="services-collage">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceCardsRef.current[index] = el)}
              className={`service-card service-${service.position} gradient-${service.gradient}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-svg-wrapper">
                {getServiceSVG(service.id, service.gradient)}
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="service-feature-tag">
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
