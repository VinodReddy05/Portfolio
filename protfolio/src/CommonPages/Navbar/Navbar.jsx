import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setClick(!click);
  };

  const handleColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const closeMenu = () => {
    setClick(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleColor);

    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleColor);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // logo style

  useEffect(() => {
    const logo = document.querySelector(".logo h1");
    const text = logo.textContent;
    logo.innerHTML = text
      .split("")
      .map(
        (char, i) => `<span style="animation-delay: ${i * 0.1}s">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div>
      <nav className={color ? "color" : ""}>
        <div className="logo">
          <h1>
            <span>V</span>
            <span>i</span>
            <span>n</span>
            <span>o</span>
            <span>d</span>
            <span>&nbsp;</span>
            <span>R</span>
            <span>e</span>
            <span>d</span>
            <span>d</span>
            <span>y</span>
          </h1>
        </div>
        <div ref={menuRef} className={click ? "menu active" : "menu"}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="mail"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={closeMenu}
          >
            Mail
          </Link>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes style={{ color: "white" }} size={25} />
          ) : (
            <FaBars style={{ color: "white" }} size={25} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
