import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-image-section">
          <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="contact-svg">
            <defs>
              <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {/* Communication Icons */}
            {/* Email */}
            <rect x="50" y="80" width="100" height="70" rx="5" fill="#1a1a1a" stroke="#6366f1" strokeWidth="2">
              <animate attributeName="y" values="80;75;80" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="60" y="90" width="80" height="50" rx="3" fill="#6366f1" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
            </rect>
            <line x1="70" y1="110" x2="130" y2="110" stroke="#ffffff" strokeWidth="2">
              <animate attributeName="x2" values="130;70;130" dur="2s" repeatCount="indefinite" />
            </line>
            {/* Phone */}
            <rect x="150" y="100" width="60" height="100" rx="10" fill="#1a1a1a" stroke="#06b6d4" strokeWidth="2">
              <animate attributeName="y" values="100;95;100" dur="2s" begin="0.2s" repeatCount="indefinite" />
            </rect>
            <circle cx="180" cy="130" r="15" fill="#06b6d4" opacity="0.3">
              <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Location Pin */}
            <path d="M 250 80 L 250 140 L 280 140 L 265 160 L 235 160 L 250 140 Z" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            </path>
            <circle cx="250" cy="100" r="8" fill="#ffffff">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Connection Lines */}
            <line x1="100" y1="145" x2="150" y2="150" stroke="#6366f1" strokeWidth="2" opacity="0.5">
              <animate attributeName="stroke-dasharray" values="0,50; 50,0" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="210" y1="150" x2="250" y2="140" stroke="#06b6d4" strokeWidth="2" opacity="0.5">
              <animate attributeName="stroke-dasharray" values="0,40; 40,0" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </line>
            {/* Message Bubbles */}
            <ellipse cx="300" cy="120" rx="40" ry="30" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="2">
              <animate attributeName="cy" values="120;115;120" dur="2s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="320" cy="140" rx="30" ry="25" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2">
              <animate attributeName="cy" values="140;135;140" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </ellipse>
          </svg>
        </div>

        <div className="skills-container">
          <div className="skill-card contact-card">
            <div className="skill-icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h3>Contact Information</h3>
            <div className="skill-tags">
            <span className="skill-tag contact-tag">
                <i className="fas fa-map-marker-alt"></i> Bengaluru, India
              </span>
              <a 
                href="mailto:Vedpandeyofficial18@gmail.com" 
                className="skill-tag contact-tag"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <i className="fas fa-envelope"></i> Vedpandeyofficial18@gmail.com
              </a>

              <a 
                href="https://linkedin.com/in/vedpandeyofficial18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="skill-tag contact-tag"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <i className="fab fa-linkedin"></i> linkedin.com/in/vedpandeyofficial18
              </a>
              <span className="skill-tag contact-tag">
                <i className="fas fa-graduation-cap"></i> Graduated from Jain University
              </span>
              <span className="skill-tag contact-tag">
                <i className="fas fa-certificate"></i> Azure & CAPM Certified
              </span>
            </div>
          </div>

          <div className="skill-card summary-card" style={{ gridColumn: 'span 2' }}>
            <div className="skill-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Professional Summary</h3>
            <div className="skill-tags">
              <span className="skill-tag summary-tag">
                Software Engineer specializing in Java & Spring Boot
              </span>
              <span className="skill-tag summary-tag">
                Expert in Microservices Architecture & REST APIs
              </span>
              <span className="skill-tag summary-tag">
                Skilled in MySQL Database Design & Optimization
              </span>
              <span className="skill-tag summary-tag">
                Proficient in Microsoft Azure Cloud Services
              </span>
              <span className="skill-tag summary-tag">
                Certified in CAPM & Agile Methodologies
              </span>
              <span className="skill-tag summary-tag">
                Strong focus on Scalability & Performance Optimization
              </span>
              <span className="skill-tag summary-tag">
                Experience with Hibernate ORM & Spring Security
              </span>
              <span className="skill-tag summary-tag">
                Passionate about Clean Code & System Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
