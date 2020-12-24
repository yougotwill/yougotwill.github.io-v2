import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" class="divide">
      <div class="projects">
        <h2 class="heading">Portfolio</h2>
        <h3 class="heading">Websites</h3>
      <div class="row">
        <div class="project-card col-2">
          <div class="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/motii/master/assets/desktop-light.png" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>motii</h3>
            <p>A motivational calendar built with React.js to help people form good habits with positive reinforcement.</p>
            <a href="https://github.com/yougotwill/motii" target="_blank" rel="noopener noreferrer">Go to project</a> | <b> Work in progress</b>
          </div>
        </div>
        <div class="project-card col-2">
          <div class="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/phonics-esl/master/assets/desktop-light.png" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>Phonics ESL</h3>
            <p>A simple tool built in React.js with TailwindCSS to review English Phonics based on <a href="http://jollyreading.com/introduction-to-jolly-phonics" target="_blank" rel="noopener noreferrer">Jolly Phonics</a>.</p>
            <a href="https://github.com/yougotwill/phonics-esl" target="_blank" rel="noopener noreferrer">Go to project</a>
            <a href="https://yougotwill.github.io/phonics-esl" target="_blank" rel="noopener noreferrer">| View online</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="project-card col-2">
          <div class="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/sortifiler/master/src/assets/screenshots/screenshot.png" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>Sortifiler Website</h3>
            <p>Sortifiler needed a landing page and I wanted to learn TailwindCSS and so this repo was born.</p>
            <a href="https://github.com/yougotwill/sortifiler" target="_blank" rel="noopener noreferrer">Go to project</a>
            <a href="https://yougotwill.github.io/sortifiler" target="_blank" rel="noopener noreferrer">| View online</a>
          </div>
        </div>
        <div class="project-card col-2">
          <div class="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/art-gallery/master/assets/screenshots/screenshot-light-1.jpg" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>Art Gallery</h3>
            <p>A free to use website template for artists to showcase their portfolio on the web.</p>
            <a href="https://github.com/yougotwill/art-gallery" target="_blank" rel="noopener noreferrer">Go to project</a>
            <a href="https://yougotwill.github.io/art-gallery" target="_blank" rel="noopener noreferrer">| View online</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="project-card col-2">
          <div class="avatar screenshot">
            <img src="assets/images/screenshot-dark.png" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>yougotwill.github.io</h3>
            <p>The source code for this website! Built for beginner developers and easy to use.</p>
            <a href="https://github.com/yougotwill/yougotwill.github.io" target="_blank" rel="noopener noreferrer">Go to project</a>
            <span class="special">| You are here!</span>
          </div>
        </div>
        <div class="project-card col-2">
          <div class="avatar">
            <img src="https://raw.githubusercontent.com/yougotwill/todo-box/master/src/resources/todobox.png" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>Todo Box</h3>
            <p>A minimalist todo list app designed for you to get stuff done!</p>
            <a href="https://github.com/yougotwill/todo-box" target="_blank" rel="noopener noreferrer">Go to project</a>
            <a href="https://yougotwill.github.io/todo-box" target="_blank" rel="noopener noreferrer">| View online</a>
          </div>
        </div>
      </div>

      <h3 class="heading">Apps / Games</h3>
      <div class="row">
        <div class="project-card col-2">
          <div class="avatar">
            <img src="assets/ui/mystery.svg" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>Sortifiler Desktop</h3>
            <p>The desktop application to get your files sorted! </p>
            <span class="special">Coming Soon...</span>
          </div>
        </div>
        <div class="project-card col-2">
          <div class="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/Eden/masterFix/Main%20Menu.png" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>Eden's Odyssey</h3>
            <p>University Project: FPS & VR video game for use with Noitom Perception Neuron Motion Capture suit and Google Cardboard</p>
            <a href="https://github.com/yougotwill/Eden" target="_blank" rel="noopener noreferrer">Go to project</a>
          </div>
        </div>
      </div>

      <h3 class="heading">Open Source Contributions</h3>
      <div class="row">
        <div class="project-card col-2">
          <div class="avatar">
            <img src="https://raw.githubusercontent.com/BoostIO/Boostnote/master/resources/app.png" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>BoostNote</h3>
            <p>An open source markdown editor for Mac, Windows and Linux. The intuitive and stylish note taking tool for developers.</p>
            <a href="https://github.com/yougotwill/Boostnote" target="_blank" rel="noopener noreferrer">Go to project</a>
          </div>
        </div>
        <div class="project-card col-2">
          <div class="avatar">
            <img src="https://raw.githubusercontent.com/dracula/coteditor/master/screenshot.png" alt="screenshot"/>
          </div>
          <div class="details">
            <h3>Dracula</h3>
            <p>A dark theme for many editors, shells, and more. I have contributed the <a href="https://coteditor.com" target="_blank" rel="noopener noreferrer">CotEditor</a> theme.</p>
            <a href="https://github.com/yougotwill/dracula-coteditor" target="_blank" rel="noopener noreferrer">Go to project</a>
          </div>
        </div>
      </div>

      <h3 class="heading">Other Projects</h3>
      <div class="project-card">
        <div class="details no-image">
          <h3>Sortifiler CLI</h3>
          <p>An opinionated command line interface to sort your files and folders easily while feeling like <a href="https://knowyourmeme.com/memes/hackerman" target="_blank" rel="noopener noreferrer">Hackerman</a>.</p>
          <a href="https://github.com/yougotwill/sortifiler-cli" target="_blank" rel="noopener noreferrer">Go to project</a>
        </div>
      </div>

    </div>
  </section>
  );
};

export default Portfolio;
