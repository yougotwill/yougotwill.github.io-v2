import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='#portfolio'>Portfolio</Link></li>
        <li><Link to='#about'>About</Link></li>
        <li><Link to='/music/'>Music</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
