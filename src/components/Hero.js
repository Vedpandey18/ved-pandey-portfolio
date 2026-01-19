import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

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
    <section id="home" className="hero">
      {/* Animated Background Particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <span className="greeting-icon">
                <i className="fas fa-code"></i>
              </span>
              <span className="greeting-text">
                <span className="greeting-highlight">Hello World!</span> I'm
              </span>
            </div>
            <h1>
              <span className="name-gradient">Ved Pandey</span>
              <br />
              <span className={`typing-text ${typingComplete ? 'complete' : ''}`}>
                Software Engineer
              </span>
            </h1>
            <p className="hero-description">
              I position myself as a <strong className="highlight-text">versatile software engineer</strong> rather than being limited to specific technologies. Instead of focusing only on individual frameworks or tools, I emphasize <strong className="highlight-text">strong software engineering fundamentals, problem-solving skills, and architectural thinking</strong>. This allows me to adapt quickly to new stacks and evolving technologies. I work with modern application architectures and follow <strong className="highlight-text">clean, scalable, and maintainable coding practices</strong>. I also leverage <strong className="highlight-text">AI-assisted development tools</strong> such as ChatGPT, GitHub Copilot, and Cursor AI to improve productivity, accelerate development, and enhance code quality. My focus is always on transforming complex business requirements into <strong className="highlight-text">reliable, production-ready software solutions</strong> that deliver real-world impact.
            </p>

            <div className="hero-buttons">
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                <span className="btn-content">
                  <i className="fas fa-rocket"></i>
                  <span>View Projects</span>
                </span>
                <span className="btn-shine"></span>
              </a>
              <a 
                href="#contact" 
                className="btn btn-hire"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                <span className="btn-content">
                  <i className="fas fa-briefcase"></i>
                  <span>Hire Me</span>
                </span>
                <span className="btn-shine"></span>
              </a>
              <a 
                href="#contact" 
                className="btn btn-secondary"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                <span className="btn-content">
                  <i className="fas fa-paper-plane"></i>
                  <span>Get In Touch</span>
                </span>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="code-animation svg-container">
              <svg 
                viewBox="0 0 800 600" 
                className="hero-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Animated Background Circles */}
                <circle cx="400" cy="300" r="200" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2">
                  <animate attributeName="r" values="200;220;200" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="300" r="150" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="2">
                  <animate attributeName="r" values="150;170;150" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                
                {/* Developer Figure */}
                <g className="developer-figure">
                  {/* Head */}
                  <circle cx="400" cy="180" r="40" fill="url(#grad1)">
                    <animate attributeName="cy" values="180;175;180" dur="2s" repeatCount="indefinite" />
                  </circle>
                  {/* Eyes */}
                  <circle cx="390" cy="175" r="4" fill="#ffffff" />
                  <circle cx="410" cy="175" r="4" fill="#ffffff" />
                  {/* Body */}
                  <rect x="360" y="220" width="80" height="120" rx="10" fill="url(#grad1)">
                    <animate attributeName="y" values="220;215;220" dur="2s" begin="0.2s" repeatCount="indefinite" />
                  </rect>
                  {/* Arms */}
                  <rect x="320" y="240" width="30" height="80" rx="15" fill="#6366f1">
                    <animateTransform attributeName="transform" type="rotate" values="0 335 280;10 335 280;0 335 280" dur="2s" begin="0.3s" repeatCount="indefinite" />
                  </rect>
                  <rect x="450" y="240" width="30" height="80" rx="15" fill="#6366f1">
                    <animateTransform attributeName="transform" type="rotate" values="0 465 280;-10 465 280;0 465 280" dur="2s" begin="0.4s" repeatCount="indefinite" />
                  </rect>
                  {/* Laptop */}
                  <rect x="340" y="280" width="120" height="80" rx="5" fill="#1a1a1a" stroke="#06b6d4" strokeWidth="2">
                    <animate attributeName="y" values="280;275;280" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="350" y="290" width="100" height="60" rx="3" fill="#06b6d4" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
                  </rect>
                  {/* Code Lines - Animated */}
                  <line x1="360" y1="310" x2="440" y2="310" stroke="#ffffff" strokeWidth="2">
                    <animate attributeName="x2" values="440;360;440" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="365" y1="325" x2="435" y2="325" stroke="#ffffff" strokeWidth="2">
                    <animate attributeName="x2" values="435;365;435" dur="2s" begin="0.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="370" y1="340" x2="430" y2="340" stroke="#ffffff" strokeWidth="2">
                    <animate attributeName="x2" values="430;370;430" dur="2s" begin="0.4s" repeatCount="indefinite" />
                  </line>
                </g>
                
                {/* Floating Tech Icons */}
                <g transform="translate(200, 150)">
                  <circle r="30" fill="rgba(99, 102, 241, 0.2)">
                    <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="0" y="5" textAnchor="middle" fill="#6366f1" fontSize="24" fontFamily="Arial" fontWeight="bold">J</text>
                  <animateTransform attributeName="transform" type="translate" values="200,150; 200,140; 200,150" dur="3s" repeatCount="indefinite" />
                </g>
                <g transform="translate(600, 200)">
                  <circle r="30" fill="rgba(6, 182, 212, 0.2)">
                    <animate attributeName="r" values="30;35;30" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  </circle>
                  <text x="0" y="5" textAnchor="middle" fill="#06b6d4" fontSize="24" fontFamily="Arial" fontWeight="bold">R</text>
                  <animateTransform attributeName="transform" type="translate" values="600,200; 600,190; 600,200" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </g>
                <g transform="translate(150, 450)">
                  <circle r="30" fill="rgba(139, 92, 246, 0.2)">
                    <animate attributeName="r" values="30;35;30" dur="2s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  <text x="0" y="5" textAnchor="middle" fill="#8b5cf6" fontSize="24" fontFamily="Arial" fontWeight="bold">C</text>
                  <animateTransform attributeName="transform" type="translate" values="150,450; 150,440; 150,450" dur="3s" begin="1s" repeatCount="indefinite" />
                </g>
                <g transform="translate(650, 450)">
                  <circle r="30" fill="rgba(16, 185, 129, 0.2)">
                    <animate attributeName="r" values="30;35;30" dur="2s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                  <text x="0" y="5" textAnchor="middle" fill="#10b981" fontSize="24" fontFamily="Arial" fontWeight="bold">D</text>
                  <animateTransform attributeName="transform" type="translate" values="650,450; 650,440; 650,450" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </g>
              </svg>
            </div>

            {/* Additional Animated SVG Elements */}
            <svg className="floating-svg-elements" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
              {/* Floating Code Brackets */}
              <text x="50" y="100" fill="rgba(99, 102, 241, 0.3)" fontSize="60" fontFamily="monospace" fontWeight="bold">
                {'{'}
                <animateTransform attributeName="transform" type="translate" values="0,0; 10,10; 0,0" dur="4s" repeatCount="indefinite" />
              </text>
              <text x="750" y="500" fill="rgba(139, 92, 246, 0.3)" fontSize="60" fontFamily="monospace" fontWeight="bold">
                {'}'}
                <animateTransform attributeName="transform" type="translate" values="0,0; -10,-10; 0,0" dur="4s" repeatCount="indefinite" />
              </text>
              {/* Animated Dots */}
              <circle cx="100" cy="200" r="4" fill="#6366f1" opacity="0.6">
                <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="700" cy="300" r="4" fill="#06b6d4" opacity="0.6">
                <animate attributeName="r" values="4;8;4" dur="2s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="500" r="4" fill="#8b5cf6" opacity="0.6">
                <animate attributeName="r" values="4;8;4" dur="2s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1s" repeatCount="indefinite" />
              </circle>
            </svg>

            <div className="floating-tech" style={{ animationDelay: '0s' }}>
              <i className="fab fa-java"></i>
              <span>Java Expert</span>
            </div>
            <div className="floating-tech" style={{ animationDelay: '1s' }}>
              <i className="fas fa-cloud"></i>
              <span>Azure Certified</span>
            </div>
            <div className="floating-tech" style={{ animationDelay: '2s' }}>
              <i className="fas fa-database"></i>
              <span>MySQL Mastery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
