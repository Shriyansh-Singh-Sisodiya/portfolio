import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiBootstrap } from "react-icons/si";
import "swiper/css";
import "swiper/css/pagination";
import "./Skills.css";

const skills = [
  { name: "React.js", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F0DB4F" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E44D26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#264DE4" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#563D7C" /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className=" text-center mb-5" data-aos="fade-up">
        My Skills
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 1200, disableOnInteraction: false }}
        speed={900}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="skill-card" data-aos="zoom-in">
              <div className="skill-icon">{skill.icon}</div>
              <h5 className="mt-3">{skill.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
