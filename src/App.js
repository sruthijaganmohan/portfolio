import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import { Project } from './project';
import { PROJECTS } from './projects';
import { FaPaperPlane } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="App">

      <div id='about-section'>
        <h1 className='portfolio-website'>PORTFOLIO WEBSITE</h1>

        <h1 className='sruthi'>SRUTHI JAGANMOHAN</h1>
        <h1 className='cs'>computer science engineering graduate</h1>

        <button className='menu' onClick={toggleMenu}>MENU</button>
        {isMenuOpen && <Menu onClose={closeMenu} />}
      </div>

      <div id='projects-section'>
        <h1 className='projects-header'>PROJECTS</h1>
        <div className='all-projects'>
          {PROJECTS.map((project) => (
            <Project data={project} />
          ))}
        </div>
      </div>

      <div id='contact-section'>
        <h1 className='contact-header'>CONTACT</h1>
        <div className='contact-icons'>
          <a href='mailto:sruthi12jagan@gmail.com'><FaPaperPlane size={120} color="#3e3dc4" weight="fill" className='contact' /></a>
          <a href='https://www.linkedin.com/in/sruthi-jaganmohan-301a4620a/' target='_blank'><AiFillLinkedin className='contact' size={120} color="#3E3DC4" weight="fill" /></a>
          <a href='https://github.com/sruthijaganmohan' target='_blank'><AiFillGithub className='contact' size={120} color="#3E3DC4" weight="fill" /></a>
        </div>
      </div>

    </div>
  );
}

export default App;
