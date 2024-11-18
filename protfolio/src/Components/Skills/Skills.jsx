import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../../assets/react.svg';
import image2 from '../../assets/java-script.png';
import image3 from '../../assets/javascript.svg';
import image4 from '../../assets/html-5.png';


gsap.registerPlugin(ScrollTrigger);

const skillData = [
  {
    id: 1,
    title: 'React.JS',
    year: 'I have done the projects',
    description: 'React Hooks (Functional Components), React Context API, State Management, Forms and Form Handling, React Router.',
    image: image1,
  },
  
  {
    id: 2,
    title: 'Advanced JavaScript',
    year: 'I have done the projects',
    description: 'Closures and Scope, Asynchronous JavaScript, JavaScript Object-Oriented Programming (OOP), Higher-Order Functions, Fetch API.',
    image: image2,
  },
  {
    id: 3,
    title: 'DOM',
    year: 'I have done the projects',
    description: 'DOM Structure and Tree, DOM Selection, DOM Manipulation, Attributes and Properties, DOM Events, DOM Scripting and Animation.',
    image: image3,
  },
  {
    id: 4,
    title: 'HTML & CSS',
    year: 'I have done the projects',
    description: 'HTML Elements and Tags, Semantic HTML, CSS Syntax and Selectors, Box Model, Positioning and Layout, CSS Transitions and Animations, Responsive Design and Media Queries.',
    image: image4,
  },
];

const Skills = () => {
  const textBoxesRef = useRef([]);

  useEffect(() => {
    textBoxesRef.current.forEach((box, i) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }
      );
    });
  }, []);

  return (

    <>
    {/* <div className="portfolio">
      <div className="dots-background">
         <div className="dot"></div>
         <div className="dot"></div>
         <div className="dot"></div>
         <div className="dot"></div>
         <div className="dot"></div>
       </div>
     </div>  */}
    <div className="portfolio1">
      {/* <div className="bgcolor"></div> */}
      <div className="content-project">
        <h1 className="skills">Skills  </h1>
        {skillData.map((skill, index) => (
          <div
            key={skill.id}
            className={`container-project ${index % 2 === 0 ? 'left-container' : 'right-container'}`}
          >
            <img className="skillImg" src={skill.image} alt={skill.title} />
            <div
              className="text-box"
              ref={(el) => (textBoxesRef.current[index] = el)}
            >
              <h2>{skill.title}</h2>
              <small>{skill.year}</small>
              <p>{skill.description}</p>
              <span className={`${index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'}`}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Skills;
