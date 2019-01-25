import React from 'react';
import './header.css'

const Header = ({ name = 'Thiago Bonfim' }) => (
  <header className='App-header mb-0 mt-2 h1 border-bottom border-secondary'>
    <a className="sr-only sr-only-focusable" href="#content">Skip to main content</a>
    <nav className="row navbar">
      <span className="navbar-brand col-xs-12">Williams-Sonoma code challenge</span>
      <p className="w-25 mb-0 text-right text-info">Developed by {name}</p>
    </nav>
  </header>
);
export default Header;
