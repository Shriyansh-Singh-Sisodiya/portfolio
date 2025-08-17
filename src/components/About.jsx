import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-title text-center mb-5" data-aos="fade-right">
        About Me
      </h2>

      <div className="card-about" data-aos="fade-up">
        <h3>Career Objective</h3>
        <p>
          MERN Stack Developer skilled in building full-stack web applications
          using React.js, Node.js, Express.js, MongoDB, HTML, CSS, JavaScript,
          Bootstrap, and REST APIs. Experienced in creating responsive,
          user-focused designs and scalable backend services.
        </p>
      </div>

      <div className="card-about" data-aos="fade-up" data-aos-delay="200">
        <h3>Experience</h3>
        <ul>
          <li>
            <strong>
              Web Development Intern - Projection Edutech Pvt. Ltd. (Mar 2025 -
              Present)
            </strong>{" "}
            - Developed frontend layouts for 3+ live projects using HTML, CSS,
            Bootstrap, React.js.
          </li>
          <li>
            <strong>React.js Training - Code Mantra (Jul 2024 - Oct 2024)</strong>{" "}
            - Built reusable components, responsive UI, integrated React Router.
          </li>
        </ul>
      </div>

      <div className="card-about" data-aos="fade-up" data-aos-delay="400">
        <h3>Education & Certifications</h3>
        <ul>
          <li>
            B.Tech Computer Science - Chameli Devi Group of Institutions,
            Indore, 2025
          </li>
          <li>Senior Secondary - PM SHRI Kendriya Vidyalaya Dewas, 2021</li>
          <li>
            Certifications: AWS Cloud Foundations, Zensar & RPG Foundation
            Training, React.js Training
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
