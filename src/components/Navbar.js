import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className='myName'>
        <span className='letter'>R</span>
        <span className='letter'>.</span>
        <span className='letter'>T</span>
        <span className='letter'>a</span>
        <span className='letter'>z</span>
        <span className='letter'>h</span>
        <span className='letter'>d</span>
        <span className='letter'>y</span>
        <span className='letter'>n</span>
        <span className='letter'>o</span>
        <span className='letter'>v</span>
      </div>
      <div className="container-fluid justify-content-end">
    <ul className="navbar-nav ml-auto text-end">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contacts"
          onClick={() => handlePageChange('Contacts')}
          className={currentPage === 'Contacts' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Experience"
          onClick={() => handlePageChange('Experience')}
          className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}
        >
          Experience
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
    </ul>
    </div>
    </nav>
    </div>
  );
}

export default NavTabs;
