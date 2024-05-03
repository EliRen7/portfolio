import React from 'react'
import './about.css'
import ME from '../../assets/Liz2.jpg'
import {MdTravelExplore} from 'react-icons/md'
import {MdOutlineComputer} from 'react-icons/md'
import {FaRunning} from 'react-icons/fa'

const About = () => {
  return (
    <div id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <MdTravelExplore className='about__icon'/>
            <h5>Travel</h5>
            <small>Ask me about my recent experience living abroad in South Korea</small>
          </article>

          <article className='about__card'>
            <MdOutlineComputer className='about__icon'/>
            <h5>Web Developer</h5>
            <small>Ask me about any recent projects and latest tech</small>
          </article>

          <article className='about__card'>
            <FaRunning className='about__icon'/>
            <h5>Fitness & Health</h5>
            <small>Ask me about my fitness & health journey</small>
          </article>
        </div>
        <p>
          Hey there! I'm Elizabeth, a web developer with the ability for turning ideas into beautiful, user-friendly digital experiences. My coding journey is fueled by a curiosity for the latest technologies and a genuine love for crafting solutions. If you are interested in learning more about me, please send
          an email my way!        
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>
    </div>
  )
}

export default About
