import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'

const Footer = () => (
    <>
  <div className="footer">
    <a href="https://github.com/merayoussef" target="_blank" rel="noopener noreferrer">
        <img alt="Github" className="footer-img" src={github} />
    </a> 

    <a href="https://www.linkedin.com/in/merayoussef" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" className="footer-img" src={linkedin} />
    </a> 

  </div>
  </>
);

export default Footer;