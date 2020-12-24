// TODO upgrade
import React from 'react';

import lightSVG from '../../resources/ui/theme-light.svg';
import darkSVG from '../../resources/ui/theme-dark.svg';

const ThemeToggle = () => {
  const clickHandler = () => {
    localStorage.setItem('mode',
      (localStorage.getItem('mode') || 'dark-theme') === 'dark-theme'
      ? 'light-theme'
      : 'dark-theme');
    localStorage.getItem('mode') === 'dark-theme'
      ? document.querySelector('body').classList.add('dark-theme')
      : document.querySelector('body').classList.remove('dark-theme');
  };
  return (
    <div className="theme-toggle" onClick={clickHandler}>
      <img src={lightSVG} alt='sun' className="light" />
      <img src={darkSVG} alt='moon' className="dark" />
    </div>
  );
};

export default ThemeToggle;
