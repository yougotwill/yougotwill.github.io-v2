import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-box">
        <h2 className="heading">About Me</h2>
        <div className='info'>
          <h3 className="heading">Skills</h3>
          <div className="skills">
            <div className='is-tablet row'>
              <div className="skill col-4"><span>Javascript</span><img src='assets/ui/javascript.svg' width="48px" height="48px" alt='javascript' /></div>
              <div className="skill col-4"><span>React.js</span><img src='assets/ui/react.svg' width="48px" height="48px" alt='react' /></div>
              <div className="skill col-4"><span>Ember.js</span><img src='assets/ui/ember.svg' width="48px" height="48px" alt='ember' /></div>
              <div className="skill col-4"><span>Node.js</span><img src='assets/ui/node.svg' width="48px" height="48px" alt='node' /></div>
            </div>
            <div className='is-tablet row'>
              <div className="skill col-4"><span>HTML5</span><img src='assets/ui/html5.svg' width="48px" height="48px" alt='html5' /></div>
              <div className="skill col-4"><span>CSS3</span><img src='assets/ui/css3.svg' width="48px" height="48px" alt='css3' /></div>
              <div className="skill col-4"><span>Sass</span><img src='assets/ui/sass.svg' width="48px" height="48px" alt='sass' /></div>
              <div className="skill col-4"><span>Tailwind</span><img src='assets/ui/tailwind.svg' width="48px" height="48px" alt='tailwind' /></div>
            </div>
            <div className='is-tablet row'>
              <div className="skill col-4"><span>Unity3D</span><img src='assets/ui/unity.png' width="48px" height="48px" alt='unity' /></div>
              <div className="skill col-4"><span>C#</span><img src='assets/ui/csharp.svg' width="48px" height="48px" alt='csharp' /></div>
              <div className="skill col-4"><span>Python</span><img src='assets/ui/python.svg' width="48px" height="48px" alt='python' /></div>
              <div className="skill col-4"><span>Java</span><img src='assets/ui/java.svg' width="48px" height="48px" alt='java' /></div>
            </div>
          </div>
        </div>
        <div className="biography">
          <h3 className="heading">My story</h3>
          <p>Hi there <span role='img' aria-label='waving hand'>👋</span></p>

          <p>I've always been interested in technology since I was young. I started out with taking apart and putting together an old desktop and staring at Apple products in the iStore on the weekend hoping to one day own my very own iPod.</p>

          <p>Fast-forward a few years and I developed a healthy interest in programming and designing beautiful applications. Once I got to university I starting working on various projects related to internet security, artificial intelligence & video game design while searching for the area that best fit my interests and skills.</p>

          <p>As the internet continued to grow, I was exposed to emerging technologies and I gained an interest in the web and how it has evolved to help us in our daily lives. From there I realised I had a good eye for what made things 'look good' and my obsession with front end development was born!</p>

          <p>Now I'm an aspiring front end developer with some experience under my belt. Around 2 years ago I moved to Japan and when I'm not coding, I'm studying Japanese, finding ramen shops and going on nature runs.</p>

          <p>Here's my <a href="https://drive.google.com/file/d/1FpGmgjNU0zxcZ6B9JhdeffmCqU2iaPLv/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a> if you want to learn more.</p>
          <br />

          <p className="special">Current living in <span role='img' aria-label='house'>🏡</span></p>
          <p>Hyogo, Japan</p>

          <p className="special">Passionate about <span role='img' aria-label='heart'>❤️</span></p>
          <p>Travel, Music, Reading</p>

          <p className="special">Not so passionate about <span role='img' aria-label='man saying no'>🙅🏻‍♂️</span></p>
          <p>Spicy Foods, Hot Weather</p>
        </div>
      </div>
    </section>
  );
};

export default About;
