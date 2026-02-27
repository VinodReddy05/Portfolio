import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import imageFoot from "../../assets/footerImg.svg"

const Footer = () => {
  return (
    <div>

      <section>
      {/* <div className="footerImg">
        <img src={imageFoot}alt="" />
      </div> */}
        
        <div className="footer-mailBox">
          <form>
            <label>E-mail</label>
            <input type="email" spellcheck="true"  placeholder='Email' required spellCheck="true" />
          </form>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vinod-reddy05/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin  style={{ fontSize: '36px' }} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub  style={{ fontSize: '36px' }} />
            </a>
            <a href="https://www.instagram.com/vinodreddi05/" target="_blank" rel="noopener noreferrer">
              <FaInstagram   style={{ fontSize: '36px' }}/>
            </a>
          </div>
          
        </div>
 <div className='copyright'>© 2025 Vinod Reddy. All rights reserved.
</div>
      </section>
             

    </div>
  );
};

export default Footer;
