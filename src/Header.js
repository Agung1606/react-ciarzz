import React from 'react';
import './style.css';

export function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="" alt="react_logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
  </header>
  );
}