import React from 'react';

const Hero = () => {
  return (
    <section id='hero'>
      <div class="profile">
        <img src="assets/images/avatar.jpg" alt="profile" class="image round" />
        <h1 class="heading">William Grant</h1>
      </div>
    <p class="quote"><i>"Without music, life would be a mistake." - Friedrich Nietzsche</i></p>

    <table class="info-grid">
      <tr>
        <td class="subtitle left">Web Developer <span class="icon" role='img' aria-label='programmer'>👨‍💻</span></td>
        <td class="subtitle right">English Teacher <span class="icon" role='img' aria-label='teacher'>👨‍🏫</span></td>
      </tr>
      <tr>
        <td class="subtitle left">South African <span class="icon" role='img' aria-label='south africa'>🇿🇦</span></td>
        <td class="subtitle right">Living in Japan <span class="icon" role='img' aria-label='japan'>🇯🇵</span></td>
      </tr>
      </table>
    </section>
  );
};

export default Hero;
