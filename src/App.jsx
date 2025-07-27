import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <>
      <header className="main-header">
        <nav className="navbar">
          <div className="logo">
            <a href="#">TOUHID</a>
          </div>
          <ul className={`nav-links${menuOpen ? " active" : ""}`}>
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className={`hamburger-menu${menuOpen ? " active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-headline">
              Designing <span className="highlight">Experiences</span>,<br />
              Crafting <span className="highlight">Visuals</span>.
            </h1>
            <p className="hero-subheadline">
              Hi, I'm [Your Name], a passionate beginner graphic designer ready to bring ideas to life.
            </p>
            <a href="#work" className="cta-button">View My Work</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section content-section">
          <div className="container">
            <h2 data-aos="fade-right">About Me</h2>
            <div className="about-content" data-aos="fade-up">
              <div className="about-text">
                <p>Hello! I'm [Your Name], and I'm diving into the exciting world of graphic design...</p>
                <p>Currently learning and exploring tools like Illustrator, Photoshop...</p>
              </div>
              <div className="about-image-placeholder" data-aos="fade-left">
                <span>Your Photo Here</span>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="work-section content-section">
          <div className="container">
            <h2 data-aos="fade-right">My Work</h2>
            <p className="section-intro" data-aos="fade-up">Here are a few projects I've worked on.</p>
            <div className="portfolio-grid">
              {[1, 2, 3, 4].map((i) => (
                <div className="portfolio-item" key={i} data-aos="zoom-in-up" data-aos-delay={i * 100}>
                  <div className="portfolio-image-placeholder">
                    <span>[Your Project Image {i} Here]</span>
                  </div>
                  <div className="portfolio-info">
                    <h3>[Project Title {i}]</h3>
                    <p>[Brief Description]</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section content-section">
          <div className="container">
            <h2 data-aos="fade-right">Get In Touch</h2>
            <p className="section-intro" data-aos="fade-up">Have a project in mind or just want to say hi?</p>
            <div className="contact-info" data-aos="fade-up" data-aos-delay="100">
              <p>Reach out via email:</p>
              <a href="mailto:your.email@example.com" className="email-link">your.email@example.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container">
          <p>&copy; 2024 [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
