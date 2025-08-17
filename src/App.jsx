import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Router>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
