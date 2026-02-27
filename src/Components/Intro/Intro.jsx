import React, { useEffect, useRef, useState } from "react";
import "./Intro.css";
import Typed from "typed.js";
import image from "../../assets/vinodPic.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import ScaleLoader from "react-spinners/ScaleLoader";

const Intro = () => {
  AOS.init();
  const el = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["VINODREDDY JANAGAM", "Full-Stack Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleIconClick = (url) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.open(url, "_blank");
    }, 3000);
  };

  return (
    <>

<div className="portfolio11">
      <div className="dots-background">
         <div className="dot"></div>
         <div className="dot"></div>
         <div className="dot"></div>
         <div className="dot"></div>
         <div className="dot"></div>
       </div>
     </div> 
      {loading && (
        <div className="loader-overlay">
          <ScaleLoader color="#3498db" height={50} width={6} radius={3} margin={2} />
        </div>
      )}
      <div className="Intro introInfo" id="Intro">
        <div
          className="i-left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <div className="i-name">
            <span>Hy! I Am </span>
            <span
              className="typeName"
              style={{
                display: "flex",
                fontSize: "48px",
              }}
            >
              &nbsp;{" "}
              <span
                className="gradient-text"
                style={{ position: "relative", }}
                ref={el}
              ></span>
            </span>
            <span>
            Full-Stack Web Developer with a high level of experience in web
              designing and development, producing quality work.
            </span>
          </div>
          <div className="social-icon">
            <button
              onClick={() =>
                handleIconClick("https://www.linkedin.com/in/vinod-reddy05/")
              }
            >
              <FaLinkedin style={{ fontSize: "36px" }} />
            </button>
            <button onClick={() => handleIconClick("https://github.com/")}>
              <FaGithub style={{ fontSize: "36px" }} />
            </button>
            <button
              onClick={() =>
                handleIconClick("https://www.instagram.com/vinodreddi05/")
              }
            >
              <FaInstagram style={{ fontSize: "36px" }} />
            </button>
          </div>
        </div>
        <div
          className="i-right"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <img className="i-rightImg" src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
