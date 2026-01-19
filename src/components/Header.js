import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateActiveSection();
    };

    const updateActiveSection = () => {
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <span>VP</span>
            <div className="logo-dot"></div>
          </a>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={activeSection === 'services' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
