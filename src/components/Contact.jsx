// Contact.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="container my-5" id="contact">
      

      {/* Contact Info */}
      <div className="contact-info text-center mt-5" data-aos="fade-up" data-aos-delay="200">
        <h4>Or Reach Me At</h4>
        <p><FaEnvelope className="icon"/> shriyanshsinghsisodiya@gmail.com</p>
        <p><FaPhoneAlt  className="icon"/> +91 89640 21179</p>
        <p><FaLinkedin className="icon"/> <a href="https://www.linkedin.com/in/shriyanshsinghsisodiya" target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><FaGithub className="icon"/> <a href="https://github.com/Shriyansh-Singh-Sisodiya" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
    </section>  
  );
};

export default Contact;
