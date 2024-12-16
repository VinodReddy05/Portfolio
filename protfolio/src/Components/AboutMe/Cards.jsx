
import React, { useState } from "react";
import "./AboutMe.css";
import { FaDownload } from "react-icons/fa";
import RotateLoader from "react-spinners/RotateLoader";

const Cards = () => {
  const [loading, setLoading] = useState(false);

  const handleResumeDownload = () => {
    setLoading(true);
  
    setTimeout(() => {                               
      setLoading(false);
      const link = document.createElement("a");
      link.href = "/Resume/VinodReddy_janagam_Resume1.pdf";  
      // link.download = "VinodReddy_janagam_Resume.pdf";   
      document.body.appendChild(link);
      link.click();   
      document.body.removeChild(link);
    }, 3000);   
  };
  
  return (
    <div className="cardsContainer">
      {loading && (
        <div className="loader-overlay">
          <RotateLoader color="#ff4d5a" size={15} />
       
        </div>
      )}
      <h1>ABOUT ME</h1>

      <div
        className="aboutme"
        id="about"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="aboutme-inner-bold">
          <span>Vinod Reddy Janagam</span> <br />
          <span>Front-End Developer</span>
        </h2>
        <p>
          A <b>Front-End Developer</b> creates the visual elements of websites
          and applications using <b>HTML, CSS, and JavaScript.</b> They ensure
          that designs are <b>responsive and user-friendly</b> while optimizing
          performance. Collaborating with designers, they{" "}
          <b>bring ideas to life with modern frameworks like React.</b> Always
          eager to learn, they stay updated with the latest web technologies
          and trends.
        </p>
        <div className="download-button" onClick={handleResumeDownload}>
          <FaDownload className="fa-download" style={{ marginRight: "8px" }} />
          <button className="resumebtn">Download Resume</button>
        </div>
      </div>

      <div className="cards">
        <div className="box1 card">
          <h2>More Skills</h2>
          <h3>Technical Skills</h3>
          <p>HTML, CSS, JavaScript, React, etc.</p>
        </div>
        <div className="box2 card">
          <h2>Project</h2>
          <h3>Portfolio</h3>
          <p>
            This project demonstrates my skills in HTML, CSS, JavaScript and
            React.JS. Libraries I have used include AOS for animated scroll,
            Typed.js, and Framer Motion, Gsap, etc.
          </p>
        </div>
        <div className="box3 card">
          <h2>Additional Skills</h2>
          <h3>Other Technologies</h3>
          <p>Node.js, GitHub, Git, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
