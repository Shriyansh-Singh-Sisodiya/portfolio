import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import me from "../assets/me.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top hero-bs-nav">
        <div className="container">
          <a className="navbar-brand fw-semibold" href="#hero">Shriyansh ⚡</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Two-column content */}
      <div className="hero-content hero-two-column">
        {/* Left: Text */}
        <div className="hero-text" data-aos="fade-right">
          <h1>Shriyansh Singh Sisodiya</h1>
          <h3 className="hero-title">MERN Stack Developer</h3>
          <p className="hero-summary">
            Passionate MERN Stack Developer focused on building responsive and scalable web applications. Skilled in React.js, Node.js, MongoDB, and modern frontend technologies. Dedicated to crafting clean, user-friendly interfaces and smooth user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-custom">See My Work</a>
            <a href="#contact" className="btn-custom">Contact Me</a>
            <a
              href="/Shriyansh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 10 }}
            >
              Download Resume
            </a>



          </div>

          {/* ✅ Social Icons */}
          <div className="hero-socials ms-3">
            <a href="https://github.com/Shriyansh-Singh-Sisodiya" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shriyanshsinghsisodiya" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/shriyanshsingh_" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="hero-image" data-aos="fade-left">
          <img src={me} alt="Shriyansh" className="hero-pfp" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
