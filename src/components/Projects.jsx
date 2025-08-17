import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Project.css";
import DailyBlogHome from "../assets/DailyBlogHome.png";
import DailyBlogCatogery from "../assets/DailyBlogCatogery.png";
import Login from "../assets/Login.png";
import Saved from "../assets/Saved Post.png";
import SinglePost from "../assets/SinglePost.png";
import SNKRHOME from "../assets/SNKRHOME.png";
import SNKRBUY from "../assets/SNKRBUY.png";
import SNKRHELP from "../assets/SNKRHELP.png";
import SNKRDETAIL from "../assets/SNKRDETAIL.png";
import snaphome from "../assets/snaphome.png";
import snapcheckout from "../assets/snapcheckout.png";
import snapitem from "../assets/snapitem.png";
import snapcatogery from "../assets/snapcatogery.png";

const projects = [
  {
    title: "Snap Shop E-Commerse",
    desc: "Full MERN Stack Project",
    images: [
     snaphome,snapcheckout,snapitem,snapcatogery
    ],
    link: "https://ecommerce-snap-shop.vercel.app/"
  },
  {
    title: "Daily Blog Website",
    desc: "React + Bootstrap responsive UI",
    images: [
      DailyBlogHome, DailyBlogCatogery, Login, Saved, SinglePost
    ],
    link: "https://blog-app-azure-gamma.vercel.app/"
  },
  {
    title: "SNKR Nest Shoe E-Commerse ",
    desc: "HTML, CSS, BOOTSTRAP",
    images: [SNKRHOME, SNKRBUY, SNKRHELP, SNKRDETAIL
    ],
    link: "https://shriyansh-singh-sisodiya.github.io/snkernest/"
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className=" text-center mb-5" data-aos="fade-right">Projects</h2>
      <div className="projects-container d-flex flex-wrap justify-content-center">
        {projects.map((p, i) => (
          <div className="glass-card project-card" key={i} data-aos="flip-left" data-aos-delay={i * 200}>

            {/* Swiper Carousel for images */}
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
            >
              {p.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={`${p.title} ${idx}`} className="project-img" />
                </SwiperSlide>
              ))}
            </Swiper>

            <h3 className="mt-3">{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="btn-custom">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
