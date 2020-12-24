import React from 'react';

const Footer = () => {
  return (
    <footer>
        <span class="built-with">Built with <span role='img' aria-label='coffee cup'>☕️</span> and <span role='img' aria-label='heart'>❤️</span></span>
        <span class="banner">Project of the Day: <a href="https://motii.netlify.app" target="_blank" rel="noopener noreferrer">motii</a></span>
        <div>
          <a href="https://drive.google.com/file/d/1FpGmgjNU0zxcZ6B9JhdeffmCqU2iaPLv/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="tooltip"><span class="tooltip-contents bounce">See my resume</span><img src="assets/ui/cv.svg" class="icon" alt="CV" /></a>
          <a href="mailto:yougotwill94@gmail.com" target="_blank" rel="noopener noreferrer"><img src="assets/ui/email.svg" class="icon" alt="Email" /></a>
          <a href="https://instagram.com/yougotwill" target="_blank" rel="noopener noreferrer"><img src="assets/ui/instagram.svg" class="icon" alt="Instagram" /></a>
          <a href="https://github.com/yougotwill" target="_blank" rel="noopener noreferrer"><img src="assets/ui/github.svg" class="icon" alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/yougotwill/" target="_blank" rel="noopener noreferrer"><img src="assets/ui/linkedin.svg" class="icon" alt="LinkedIn" /></a>
          <a href="https://dev.to/yougotwill/" target="_blank" rel="noopener noreferrer"><img src="assets/ui/devto.svg" class="icon" alt="DevTo" /></a>
        </div>
      </footer>
  );
};

export default Footer;
