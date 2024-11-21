import React, { useState } from 'react';
import './Project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import Hotel from "../../assets/hotelbookingImg.svg";
import movie from "../../assets/MovieAppImg.svg";
import galaxy from '../../assets/GalaxyTrvlmg.svg';
import Book from "../../assets/dictionaryBookImg.svg";
import tour from "../../assets/TourImg.svg";
import trek from "../../assets/trekingImg.svg";

const Project = () => {
    const projects = [
        { src: Hotel,
             link: 'https://travelbookinghotel.web.app/', 
             text: 'Look at my project', 
             title: "HotelBooking", 
             concept: "React Redux" ,
             desc:"JSON Server: Created to handle data for city listings and user registration, storing user credentials securely. =>React Redux: Utilized in the payment section for robust state management and form validation. =>Sample Login: Set up for users to log in to the application. =>Animation Libraries: Integrated Framer Motion, Swiper, Typed, etc., for smooth animations, transitions, and interactive elements. =>These additions contribute to a responsive and interactive user experience in the booking application  "
            },

        { src: movie,
             link: 'https://whimsical-mandazi-818a9d.netlify.app/', 
             text: 'Look at my project', 
             title: "Movie App", 
             concept: "API Integration",
             desc:"Objective => The goal of the TMDb movie-fetching project is to create an application that allows users to search for and view detailed information about movies. Users can see trending movies, search by keywords, filter by genres, and view movie details such as ratings, release date, cast, and more."
             },

        { src: galaxy, 
            link: 'https://ajaymeru-weather-app.netlify.app/',
             text: 'Look at my project', 
             title: "Galaxy Travel", 
             concept: "React vite",
             desc:"Objective=>To create a user-friendly travel exploration website where users can browse destinations, view package details, and plan a potential getaway. The application focuses on providing a simple and visually appealing interface."
             },

        { src: Book, 
            link: 'https://vinodreddy05.github.io/Dictionary/', 
            text: 'Look at my project', 
            title: "Dictionary Book",
             concept: "Javascript API fetching (UI)",
             desc:"Objective=>The main goal of the Dictionary Book App is to create an easy-to-use platform that allows users to search for words and access their meanings and related information quickly. The application aims to enhance vocabulary and language understanding by providing comprehensive definitions and usage examples."
             },

        { src: tour, 
            link: 'https://vinodreddy05.github.io/ViaTours-/',
             text: 'Look at my project', 
             title: "Tours and Travelling",
              concept: "HTML, CSS, DOM",
              desc:"Objective=>The goal of this project is to create a user-friendly platform that allows users to browse and book various tours and travel packages. The application will focus on using Advance JavaScript for DOM manipulation to handle user interactions, display tour details, and manage the booking process."
            },

    
        { src: trek,
             link: '',
              text: 'Click to see my project', 
              title: "Trekking", 
              concept: "HTML and CSS" ,
              desc:"Creating a basic HTML and CSS responsive trekking project is a great way to practice your web development skills. Below is a simple outline for a project that includes a homepage displaying trekking packages, using responsive design principles. The project will be structured with HTML for the markup and CSS for styling, ensuring that it looks good on various devices."
            },
    ];

    const [activeProject, setActiveProject] = useState(1); 

    const toggleProjectDetail = (index) => {
        setActiveProject(activeProject === index ? active : index); 
    };

    return (
        <div className='project-cont'  id="projects">
            {/* Projects Heading */}
            <div className="projects-heading" id="portfolio">
                <h1 className='project-head'>Projects</h1>
            </div>

            {/* Project Buttons */}
           
            {/* Projects Carousel */}
            <div className="projects">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 40 },
                        1024: { slidesPerView: 3, spaceBetween: 50 },
                    }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.src} alt={`Slide ${index + 1}`} />
                                <div className="slide-text">{project.text}</div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="project-buttons">
                {projects.map((project, index) => (
                    <button
                        key={index}
                        className={activeProject === index ? 'active1' : ''}
                        onClick={() => toggleProjectDetail(index)}
                    >
                        {project.title}
                    </button>
                ))}
            </div>


            {/* Project Details */}
            <div className="project-content"  >
                {projects.map((project, index) => (
                    activeProject === index && (
                        <motion.div
                        key={index}
                        className="project-detail"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>{project.title}</h1>
                        <small>Concept: <b>{project.concept}</b></small>
                        <h4>How I Built This?</h4>
                        <p>{project.desc}</p>
                    </motion.div>
                    )
                ))}
            </div>
        </div>
    );
    
};

export default Project;
