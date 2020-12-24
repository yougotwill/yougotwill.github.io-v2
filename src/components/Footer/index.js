import React from 'react';

import cvSVG from '../../resources/ui/cv.svg';
import emailSVG from '../../resources/ui/email.svg';
import instagramSVG from '../../resources/ui/instagram.svg';
import githubSVG from '../../resources/ui/github.svg';
import linkedinSVG from '../../resources/ui/linkedin.svg';
import devtoSVG from '../../resources/ui/devto.svg';

const Footer = () => {
  return (
    <footer>
        <span className="built-with">Built with <span role='img' aria-label='coffee cup'>☕️</span> and <span role='img' aria-label='heart'>❤️</span></span>
        <span className="banner">Project of the Day: <a href="https://motii.netlify.app" target="_blank" rel="noopener noreferrer">motii</a></span>
        <div>
          <a href="https://drive.google.com/file/d/1FpGmgjNU0zxcZ6B9JhdeffmCqU2iaPLv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="tooltip"><span className="tooltip-contents bounce">See my resume</span><img src={cvSVG} className="icon" alt="CV" /></a>
          <a href="mailto:yougotwill94@gmail.com" target="_blank" rel="noopener noreferrer"><img src={emailSVG} className="icon" alt="Email" /></a>
          <a href="https://instagram.com/yougotwill" target="_blank" rel="noopener noreferrer"><img src={instagramSVG} className="icon" alt="Instagram" /></a>
          <a href="https://github.com/yougotwill" target="_blank" rel="noopener noreferrer"><img src={githubSVG} className="icon" alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/yougotwill/" target="_blank" rel="noopener noreferrer"><img src={linkedinSVG} className="icon" alt="LinkedIn" /></a>
          <a href="https://dev.to/yougotwill/" target="_blank" rel="noopener noreferrer"><img src={devtoSVG} className="icon" alt="DevTo" /></a>
        </div>
      </footer>
  );
};

export default Footer;
