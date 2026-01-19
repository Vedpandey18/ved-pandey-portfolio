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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (!isMobileMenuOpen) return;
      
      const header = document.getElementById('header');
      const mobileMenuBtn = event.target.closest('.mobile-menu-btn');
      const navLinks = event.target.closest('.nav-links');
      const navLinkItem = event.target.closest('.nav-links a');
      const navLinkLi = event.target.closest('.nav-links li');
      
      // Don't close if clicking on menu button, nav links, or inside header
      if (mobileMenuBtn || navLinks || navLinkItem || navLinkLi || (header && header.contains(event.target))) {
        return;
      }
      
      setIsMobileMenuOpen(false);
    };

    // Close mobile menu on scroll (but with a small delay to allow button clicks)
    let scrollTimeout;
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsMobileMenuOpen(false);
        }, 100);
      }
    };

    if (isMobileMenuOpen) {
      // Use a slight delay to ensure click events are processed first
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
      }, 10);
      window.addEventListener('scroll', handleScrollClose, { passive: true });
    }
    
    return () => {
      clearTimeout(scrollTimeout);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [isMobileMenuOpen]);

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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen(prev => !prev);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
