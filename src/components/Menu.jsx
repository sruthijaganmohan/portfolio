import React from 'react';
import "./Menu.css";

const Menu = ({ onClose }) => {
  return (
    <div className="menu-bar">
        <div className='menu-close-div'>
        <button className='menu-close' onClick={onClose}>MENU</button><br/>
        </div>
      <ul>
        <li id='about' className='li'><a className='menu-links' href="#about-section">ABOUT</a></li>
        <li id='projects' className='li'><a className='menu-links' href="#projects-section">PROJECTS</a></li>
        <li id='contact' className='li'><a className='menu-links' href="#projects-section">CONTACT</a></li>
      </ul>
    </div>
  );
}

export default Menu;