import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a
              href="#home"
              className="logo"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <span>Ved Pandey</span>
              <div className="logo-dot"></div>
            </a>
            <p>
              Software Engineer specializing in Java, Spring Boot, and Microservices. 
              Passionate about building scalable applications and solving complex problems 
              with elegant, efficient code solutions.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/vedpandey18"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/vedpandeyofficial18"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                    }}
                  >
                    <i className="fas fa-chevron-right"></i> Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                    }}
                  >
                    <i className="fas fa-chevron-right"></i> About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('skills');
                    }}
                  >
                    <i className="fas fa-chevron-right"></i> Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('projects');
                    }}
                  >
                    <i className="fas fa-chevron-right"></i> Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('experience');
                    }}
                  >
                    <i className="fas fa-chevron-right"></i> Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                  >
                    <i className="fas fa-chevron-right"></i> Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Technologies</h3>
              <ul>
                <li>
                  <a href="#skills">
                    <i className="fas fa-chevron-right"></i> Java Development
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    <i className="fas fa-chevron-right"></i> Spring Boot
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    <i className="fas fa-chevron-right"></i> Microservices
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    <i className="fas fa-chevron-right"></i> REST APIs
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    <i className="fas fa-chevron-right"></i> MySQL Database
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Certifications</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i> CAPM
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i> Agile & Scrum
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i> Azure Fundamentals
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i> Java Certification
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i> System Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; 2023 Ved Pandey. Crafted with{' '}
            <i className="fas fa-heart" style={{ color: '#ef4444' }}></i> and{' '}
            <i className="fas fa-code" style={{ color: '#06b6d4' }}></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
